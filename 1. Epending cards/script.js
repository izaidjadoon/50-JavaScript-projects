// const panels = document.querySelectorAll('.panel');

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     removeActiveClasses();
//     panel.classList.add('active');
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove('active');
//   });
// }

// let panels = document.querySelectorAll('.panel');

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     removeActiveClasses();
//     panel.classList.add('active');
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove('active');
//   });
// }

let zaid = document.querySelectorAll('.panel');

zaid.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveOnClick();
    panel.classList.add('active');
  });
});

function removeActiveOnClick() {
  zaid.forEach((panel) => {
    panel.classList.remove('active');
  });
}
