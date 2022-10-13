// let boxes = document.querySelectorAll('.box');
// window.addEventListener('scroll', checkBoxes);

// checkBoxes();

// function checkBoxes() {
//   let triggerPoint = (window.innerHeight / 5) * 4;

//   boxes.forEach((box) => {
//     let boxTop = box.getBoundingClientRect().top;
//     if (boxTop < triggerPoint) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
//   });
// }

//Take Two
// let boxes = document.querySelectorAll('.box');
// window.addEventListener('scroll', checkBoxes);
// checkBoxes();
// function checkBoxes() {
//   let triggerPoint = (window.innerHeight / 5) * 4;
//   boxes.forEach((box) => {
//     let boxTop = box.getBoundingClientRect().top;
//     if (boxTop < triggerPoint) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
//   });
// }

//Take 3
let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', animation);
animation();
function animation() {
  let triggerPoint = window.innerHeight - 100;

  boxes.forEach((box) => {
    let boxtop = box.getBoundingClientRect().top;
    if (boxtop < triggerPoint) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
