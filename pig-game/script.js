'use strict';

const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const diceImgEl = document.querySelector('.dice');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

let player = [0, 0];
let currentPlayer = 0;
let currentScore = 0;

score0El.textContent = `0`;
score1El.textContent = `0`;

newGameBtn.addEventListener('click', () => {
  console.log(`New game btn`);
});

rollBtn.addEventListener('click', () => {
  const randomDiceRolled = Math.trunc(Math.random() * 6) + 1;
  diceImgEl.src = `dice-${randomDiceRolled}.png`;

  if (randomDiceRolled === 1) {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  }

  currentScore += randomDiceRolled;

  currentPlayer === 0
    ? (current0El.textContent = currentScore)
    : (current1El.textContent = currentScore);
});

holdBtn.addEventListener('click', () => {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
});
