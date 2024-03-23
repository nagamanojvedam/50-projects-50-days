'use strict';

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const progressEl = document.querySelectorAll('.progress-item');
const progressBarEl = document.querySelector('.progress-bar');

let currentValue = 0;

next.addEventListener('click', (evt) => {
  if (currentValue >= 5) {
    currentValue = 5;
  } else {
    currentValue++;
  }
  console.log(currentValue);
  updateProgressBar(evt.target, currentValue);
});

prev.addEventListener('click', (evt) => {
  if (currentValue <= 0) {
    currentValue = 0;
  } else {
    currentValue--;
  }
  console.log(currentValue);
  updateProgressBar(evt.target, currentValue);
});

function updateProgressBar(target, currentValue) {
  if (target.id === 'next')
    progressEl[currentValue - 1].classList.add('active');

  if (target.id === 'prev') progressEl[currentValue].classList.remove('active');

  progressBarEl.style.width = `${(currentValue - 1) * 100}px`;

  if (currentValue === 0) {
    prev.disabled = true;
  } else if (currentValue === 5) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
