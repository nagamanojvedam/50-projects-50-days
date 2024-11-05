'use strict';

const textArea = document.querySelector('#textarea');
const tagsContainer = document.querySelector('.tags');

textArea.addEventListener('keyup', (evnt) => {
  console.log(evnt.key);
  if (evnt.key === 'Enter') {
    pickChoice();
  }
  const input = textArea.value
    .split(',')
    .filter((item) => item.trim() !== '')
    .map((item) => item.trim());

  handleInput(input);
});

function handleInput(input) {
  tagsContainer.innerHTML = '';

  input.forEach((item) => {
    const newEl = document.createElement('span');
    newEl.classList.add('tag');
    newEl.textContent = item;
    tagsContainer.appendChild(newEl);
  });
}

function pickChoice() {
  console.log(`clicked Enter`);
  textArea.textContent = '';
}
