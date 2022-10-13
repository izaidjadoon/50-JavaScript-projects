let jokeEl = document.getElementById('joke');
let jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

//Async Await methode and this method is good instead of .then methode
async function generateJoke() {
  let api = {
    headers: {
      Accept: 'application/json',
    },
  };

  let responce = await fetch('https://icanhazdadjoke.com', api);

  let data = await responce.json();

  jokeEl.innerHTML = data.joke;
}

// using .then syntax
// function generateJoke() {
//   let config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com', config)
//     .then((responce) => responce.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
