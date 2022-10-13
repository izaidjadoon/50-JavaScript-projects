// let progress = document.getElementById('progress');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// let circles = document.querySelectorAll('.circle');

// let currentActive = 1;

// next.addEventListener('click', () => {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }
//   update();
// });

// prev.addEventListener('click', () => {
//   currentActive--;

//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
// });
// function update() {
//   circles.forEach((circle, index) => {
//     if (index < currentActive) {
//       circle.classList.add('active');
//     } else {
//       circle.classList.remove('active');
//     }
//   });

//   let actives = document.querySelectorAll('.active');

//   progress.style.width =
//     ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }

// ************Take 2***********
// let progress = document.getElementById('progress');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// let circles = document.querySelectorAll('.circle');

// let currentActive = 1;

// //For next btn
// next.addEventListener('click', () => {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }

//   update();
// });
// //For prev btn
// prev.addEventListener('click', () => {
//   currentActive--;
//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
// });
//update function for next and prev
// function update() {
//   circles.forEach((circle, index) => {
//     if (index < currentActive) {
//       circle.classList.add('active');
//     } else {
//       circle.classList.remove('active');
//     }
//   });

//   let actives = document.querySelectorAll('.active');
//   progress.style.width =
//     ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }
//*************Take 3************
let progress = document.getElementById('progress');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let circles = document.querySelectorAll('.circle');

let currentActive = 1;

//Event Listener for Next btn
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

//Event Listener for prev btn
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

//Function for both next and prev btn
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  let actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
