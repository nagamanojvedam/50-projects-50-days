'use strict';

const firstEl = document.querySelector('.first');
const secondEl = document.querySelector('.second');

const eventKeyEl = document.querySelector('.event-key');
const eventKeyCodeEl = document.querySelector('.event-key-code');
const eventCodeEl = document.querySelector('.event-code');

window.addEventListener('keydown', (evnt) => {
  if (secondEl.classList.contains('hidden')) {
    firstEl.classList.add('hidden');
    secondEl.classList.remove('hidden');
  }

  eventKeyEl.innerText = evnt.key;
  eventKeyCodeEl.innerText = evnt.key.charCodeAt(0);
  eventCodeEl.innerText = evnt.code;
});
