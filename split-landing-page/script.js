'use strict';

const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');
const containerEl = document.querySelector('.container');

leftEl.addEventListener('mouseover', () =>
  containerEl.classList.add('hover-left')
);
leftEl.addEventListener('mouseleave', () =>
  containerEl.classList.remove('hover-left')
);

rightEl.addEventListener('mouseover', () =>
  containerEl.classList.add('hover-right')
);
rightEl.addEventListener('mouseleave', () =>
  containerEl.classList.remove('hover-right')
);
