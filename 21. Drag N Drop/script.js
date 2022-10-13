let fill = document.querySelector('.fill');
let empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (let empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  console.log('drag enter');
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}
function dragEnd() {
  console.log('drag enter');
  this.className = 'fill';
}
function dragOver(e) {
  console.log('drag over');
  e.preventDefault();
}
function dragEnter(e) {
  console.log('drag Enter');
  e.preventDefault();
  this.className += ' hover';
}
function dragLeave() {
  console.log('drag leave');
  this.className = 'empty';
}
function dragDrop() {
  console.log('drag drop');
  this.className = 'empty';
  this.append(fill);
}
