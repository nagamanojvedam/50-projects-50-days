'use strict';

console.log(`This is a sound board`);

const audioBoxes = document.querySelectorAll('.audio-item');

audioBoxes.forEach((audioBox) => {
  audioBox.addEventListener('click', () => {
    const audio = new Audio(`./sounds/${audioBox.innerText.toLowerCase()}.mp3`);
    audio.play();
  });
});
