'use strict';

const containerEL = document.querySelector('.container');
const blurContainerEl = document.querySelector('.blur-container');

let load = 0;
let interval = setInterval(blurryEffect, 30);

function blurryEffect() {
  load++;

  if (load > 99) clearInterval(interval);

  console.log(load);

  blurContainerEl.textContent = `${load}% Loading`;
  blurContainerEl.style.opacity = mapNumRange(load, 0, 100, 1, 0);
  containerEL.style.filter = `blur(${mapNumRange(load, 0, 100, 50, 0)}px)`;
}

const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
