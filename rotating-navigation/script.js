'use strict';

const barsBtn = document.getElementById('bars');
const closeBtn = document.getElementById('close');
const navigationEl = document.querySelector('.navigation');
const containerEl = document.querySelector('.container');
const menuEl = document.querySelector('.menu');

console.log(containerEl);

barsBtn.addEventListener('click', () => {
  navigationEl.classList.remove('rotate-menu-down');
  navigationEl.classList.add('rotate-menu-up');
  containerEl.classList.add('rotate-container');
  menuEl.classList.add('show-menu');
});

closeBtn.addEventListener('click', () => {
  navigationEl.classList.remove('rotate-menu-up');
  navigationEl.classList.add('rotate-menu-down');
  containerEl.classList.remove('rotate-container');
  menuEl.classList.remove('show-menu');
});
