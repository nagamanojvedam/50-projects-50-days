'use strict';

const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const diceImgEl = document.querySelector('.dice');

const scoresEl = document.querySelectorAll('.score');
const currentScoresEl = document.querySelectorAll('.current-score');
const playersBoardEl = document.querySelectorAll('.player');

let player = [0, 0];
let currentPlayer = 0;
let currentScore = 0;

const MAX_DICE_ROLLED = 6;
const MAX_SCORE = 100;

resetGame();

newGameBtn.addEventListener('click', () => {
  resetGame();
});

rollBtn.addEventListener('click', () => {
  const rolledDice = Math.trunc(Math.random() * MAX_DICE_ROLLED) + 1;
  diceImgEl.src = `dice-${rolledDice}.png`;

  currentScore = rolledDice === 1 ? changePlayer() : currentScore + rolledDice;

  currentScoresEl[currentPlayer].textContent = currentScore;
});

holdBtn.addEventListener('click', () => {
  player[currentPlayer] += currentScore;
  checkWinner();

  scoresEl[currentPlayer].textContent = player[currentPlayer];
  changePlayer();
});

function changePlayer() {
  currentScore = 0;
  currentScoresEl[currentPlayer].textContent = currentScore;
  playersBoardEl[currentPlayer].classList.toggle('player--active');
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  playersBoardEl[currentPlayer].classList.toggle('player--active');

  return currentScore;
}

function resetGame() {
  currentPlayer = 0;
  player = [0, 0];
  currentScore = 0;

  for (let i = 0; i < player.length; i++) {
    scoresEl[i].textContent = '0';
    playersBoardEl[i].classList.remove('player--active');
    playersBoardEl[i].classList.remove('player--winner');
  }

  playersBoardEl[currentPlayer].classList.add('player--active');

  enableButtons();
}

function checkWinner() {
  if (player[currentPlayer] >= MAX_SCORE) {
    playersBoardEl[currentPlayer].classList.add('player--winner');

    disableButtons();
  }
}

function disableButtons() {
  rollBtn.disabled = true;
  holdBtn.disabled = true;
}

function enableButtons() {
  rollBtn.disabled = false;
  holdBtn.disabled = false;
}
