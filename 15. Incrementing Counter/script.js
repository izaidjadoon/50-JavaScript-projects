let counters = document.querySelectorAll('.counter');

counters.forEach((e) => {
  e.innerText = '0';

  let updateCounter = () => {
    let target = +e.getAttribute('data-target');
    let c = +e.innerText;

    let increment = target / 200;

    if (c < target) {
      e.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      e.innerText = target;
    }
  };

  updateCounter();
});
