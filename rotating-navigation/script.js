'use strict';

const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const navigationEl = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
  navigationEl.classList.remove('rotate-down');
  navigationEl.classList.add('rotate-up');
});

closeBtn.addEventListener('click', () => {
  navigationEl.classList.remove('rotate-up');
  navigationEl.classList.add('rotate-down');
});
