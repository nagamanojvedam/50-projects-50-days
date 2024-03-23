'use strict';

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const progressEl = document.querySelectorAll('.progress-item');
const progressBarEl = document.querySelector('.progress-bar');
let currentValue = 0;
let compValue = 1;

next.addEventListener('click', () => {
  if (currentValue >= 5) {
    currentValue = 5;
  } else {
    currentValue++;
  }
  console.log(currentValue);

  progressEl[currentValue - 1].classList.add('active');
  progressBarEl.style.width = `${(currentValue - 1) * 100}px`;
});

prev.addEventListener('click', () => {
  if (currentValue <= 0) {
    currentValue = 0;
  } else {
    currentValue--;
  }
  console.log(currentValue);
  progressEl[currentValue].classList.remove('active');
  progressBarEl.style.width = `${(currentValue - 1) * 100}px`;
});
