let APIURL = 'https://api.github.com/users/';
let avatar = document.getElementById('avatar');
let main = document.getElementById('main');

let form = document.getElementById('form');
let search = document.getElementById('search');
async function getUser(username) {
  try {
    let { data } = await axios(APIURL + username);

    createUserCard(data);
  } catch (err) {
    if (err.response.status == 404)
      createErrorCard('No profile with this username');
  }
}
function createErrorCard(msg) {
  let cardHTML = `
  <div class="card">
  <h1>${msg}</h1>
            </div>`;

  main.innerHTML = cardHTML;
}

function createUserCard(user) {
  let cardHTML = `<div class="card">
            <div>
                <img class="avatar" id="avatar"
                src="${user.avatar_url}" alt="${user.name}">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers </strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos}  <strong>Repos</strong></li>
                </ul>

                <div id="repos">
                </div>
            </div>
        </div>`;
  main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);

    search.value = '';
  }
});
