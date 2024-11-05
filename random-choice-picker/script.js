'use strict';

const textArea = document.querySelector('#textarea');
const tagsContainer = document.querySelector('.tags');

textArea.addEventListener('keyup', (evnt) => {
  if (evnt.key === 'Enter') {
    pickChoice();
  } else {
    const input = textArea.value
      .split(',')
      .filter((item) => item.trim() !== '')
      .map((item) => item.trim());

    handleInput(input);
  }
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
  const times = 30;

  textArea.value = '';

  const interval = setInterval(() => {
    const randomTag = getRandomTag();
    addHighlight(randomTag);
    setTimeout(() => {
      removeHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const resultTag = getRandomTag();
      console.log(resultTag);
      addHighlight(resultTag);
    }, 100);
  }, times * 100);

  setTimeout(() => {
    tagsContainer.innerHTML = '';
  }, times * 2 * 100);
}

function getRandomTag() {
  const tags = document.querySelectorAll('.tag');

  return tags[Math.floor(Math.random() * tags.length)];
}

function addHighlight(tag) {
  tag.classList.add('highlighted');
}

function removeHighlight(tag) {
  tag.classList.remove('highlighted');
}
