const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
  header.innerHTML = '  <img src="./images/laptop.webp" alt="">';
  title.innerHTML = ' Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ex.';
  profile_img.innerHTML =
    ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
  name.innerHTML = 'Zaid Jadoon';
  date.innerHTML = 'Nov 23, 2003';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));

  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
setTimeout(getData, 2500);


