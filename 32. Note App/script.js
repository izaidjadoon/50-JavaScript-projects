//select add button
let addBtn = document.getElementById('add');

let notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote(''));
//this function will add note in our dom
function addNewNote(text = '') {
  let note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
        <div class="tools">
            <button class="edit"> <i class="fas fa-edit"></i></button>
            <button class="delete"> <i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>`;

  let editBtn = note.querySelector('.edit');
  let deleteBtn = note.querySelector('.delete');
  let main = note.querySelector('.main');
  let textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = text;

  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateLs();
  });
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    let { value } = e.target;
    main.innerHTML = value;

    updateLs();
  });

  document.body.appendChild(note);
}

function updateLs() {
  let notesText = document.querySelectorAll('textarea');

  let notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}
