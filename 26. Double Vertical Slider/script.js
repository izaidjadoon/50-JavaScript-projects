let sliderContainer = document.querySelector('.slider-container');
let slideRight = document.querySelector('.right-slide');
let slideLeft = document.querySelector('.left-slide');
let upButton = document.querySelector('.up-button');
let downButton = document.querySelector('.down-button');
let slidesLength = slideRight.querySelectorAll('div').length;
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

let changeSlide = (direction) => {
  let sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
