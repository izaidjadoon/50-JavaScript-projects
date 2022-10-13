const heart = document.querySelector('.loveMe');
const times = document.getElementById('times');
let timesClicked = 0;

heart.addEventListener('dblclick', function (e) {
  createHeart(e);
});
const createHeart = (e) => {
  const faHeart = document.createElement('i');

  faHeart.classList.add('fas');
  faHeart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  faHeart.style.top = `${yInside}px`;
  faHeart.style.left = `${xInside}px`;
  heart.appendChild(faHeart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => faHeart.remove(), 1000);
};
