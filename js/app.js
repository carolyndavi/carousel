'use strict';

const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const navigation = document.querySelector('.carousel-navigation');
const bullets = Array.from(document.querySelectorAll('.carousel-bullet'));
const totalItems = document.querySelectorAll('.carousel-item').length;

const percent = 100 / totalItems;
let currentIndex = 0;

const next = () => {
  slideTo(currentIndex + 1);
};

const prev = () => {
  slideTo(currentIndex - 1);
};

const slideTo = index => {
  index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
  container.style.transform = 'translate(-' + index * percent + '%, 0)';
  bullets[currentIndex].classList.remove('active-bullet');
  bullets[index].classList.add('active-bullet');
  currentIndex = index;
};

bullets[currentIndex].classList.add('active-bullet');

navigation.addEventListener(
  'click',
  function (e) {
    let index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
      slideTo(index);
    }
  },
  false
);

function keyPress(e) {
  if (e.keyCode == '37') {
    prev();
  } else if (e.keyCode == '39') {
    next();
  }
}

prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);
document.addEventListener('keydown', keyPress);
