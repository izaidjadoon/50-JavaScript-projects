let button = document.getElementById('button');
let toasts = document.getElementById('toasts');

const messages = [
  'Message one',
  'Message Two',
  'Message Three',
  'Message Four',
];

button.addEventListener('click', () => createNotifications());

function createNotifications() {
  let notif = document.createElement('div');
  notif.classList.add('toast');

  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
