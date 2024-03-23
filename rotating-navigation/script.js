'use strict';

const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const navigationEl = document.querySelector('.navigation');
const containerEl = document.querySelector('.container');

console.log(containerEl);

menuBtn.addEventListener('click', () => {
  navigationEl.classList.remove('rotate-menu-down');
  navigationEl.classList.add('rotate-menu-up');
  containerEl.classList.add('rotate-container');
});

closeBtn.addEventListener('click', () => {
  navigationEl.classList.remove('rotate-menu-up');
  navigationEl.classList.add('rotate-menu-down');
  containerEl.classList.remove('rotate-container');
});
