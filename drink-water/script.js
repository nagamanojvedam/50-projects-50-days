'use strict';

const bottlesContainer = document.querySelectorAll('.bottles');
const largeBottle = document.querySelector('.large');
const smallBottles = document.querySelectorAll('.bottle.small');
const remainingText = document.querySelector('.remaining span');
const percentageText = document.querySelector('#percentage');
const consumedEl = document.querySelector('.consumed');
const remainingEl = document.querySelector('.remaining');

bottlesContainer.forEach((smallBottle) => {
  smallBottle.addEventListener('click', (evnt) => {
    const el = evnt.target.closest('.bottle.small');
    if (!el) return;

    fillBottle(+el.dataset['id']);
  });
});

function fillBottle(targetId) {
  console.log(targetId);
  if (targetId === 8 && smallBottles[targetId - 1].classList.contains('full')) {
    targetId--;
  } else if (
    smallBottles[targetId - 1].classList.contains('full') &&
    !smallBottles[targetId - 1].nextElementSibling?.classList.contains('full')
  ) {
    targetId--;
  }

  smallBottles.forEach((smallBottle) => {
    if (smallBottle.dataset['id'] <= targetId)
      smallBottle.classList.add('full');
    else smallBottle.classList.remove('full');
  });

  fillLargeBottle();
}

function fillLargeBottle() {
  const filledBottlesLength =
    document.querySelectorAll('.bottle.small.full').length;
  const allBottlesLength = smallBottles.length;

  const filledPercentage = (filledBottlesLength / allBottlesLength) * 100;
  const remainingWater = 2 - 0.25 * filledBottlesLength;

  if (filledBottlesLength === 0) {
    consumedEl.style.visibility = 'hidden';
    consumedEl.style.height = 0;
  } else {
    consumedEl.style.visibility = 'visible';
    consumedEl.style.height = `${
      (320 / allBottlesLength) * filledBottlesLength
    }px`;
    percentageText.textContent = `${filledPercentage}%`;
  }

  if (filledBottlesLength === allBottlesLength) {
    remainingEl.style.visibility = 'hidden';
    remainingEl.style.height = 0;
  } else {
    remainingEl.style.visibility = 'visible';
    remainingText.textContent = `${remainingWater}L`;
  }
}
