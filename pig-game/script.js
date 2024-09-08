'use strict';

const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const diceImgEl = document.querySelector('.dice');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const player0BoardEl = document.querySelector('.player--0');
const player1BoardEl = document.querySelector('.player--1');

let player = [0, 0];
let currentPlayer = 0;
let currentScore = 0;

score0El.textContent = `0`;
score1El.textContent = `0`;

newGameBtn.addEventListener('click', () => {
  resetGame();
});

rollBtn.addEventListener('click', () => {
  const rolledDice = Math.trunc(Math.random() * 6) + 1;

  if (rolledDice === 1) {
    // set current score to 0
    currentScore = 0;
    // change player
    changePlayer();
  } else {
    currentScore += rolledDice;
    diceImgEl.src = `dice-${rolledDice}.png`;
  }

  checkWinner();
});

holdBtn.addEventListener('click', () => {
  // update player score
  // set current score to 0
  // change player
  // change the active class to respective player
  changePlayer();
});

function changePlayer() {
  // toggle current player
  currentPlayer = currentPlayer === 0 ? 1 : 0;
}

function resetGame() {
  // set current player to 0
  currentPlayer = 0;
  // empty player array
  player = [0, 0];
  // set current score to 0
  currentScore = 0;
  // set text content of scores to 0
  score0El.textContent = `0`;
  score1El.textContent = `0`;
  // set active class to player 0
  player0BoardEl.classList.remove('active');
  player1BoardEl.classList.remove('active');
  player0BoardEl.classList.add('active');
  // remove winner class to player
  player0BoardEl.classList.remove('winner');
  player1BoardEl.classList.remove('winner');
}

function updateUI() {}

function checkWinner() {
  if (player[currentPlayer] > 100) {
    // update player
    // disable roll and hold buttons
  }
}
