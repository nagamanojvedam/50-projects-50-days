'use strict';

const guessedNumber = document.querySelector('.guess');
const checkBtn = document.querySelector('.btn.check');
const againBtn = document.querySelector('.btn.again');

const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');

const randomNumber = Math.floor(Math.random() * 20) + 1;

let currScore = 20;
let highScore = 0;

checkBtn.addEventListener('click', () => {
  const userGuess = Number(guessedNumber.value);

  if (userGuess <= 20 && userGuess >= 1) {
    if (userGuess === randomNumber) {
      if (currScore > highScore) highScore = currScore;

      highScoreEl.innerHTML = highScore;
      numberEl.innerHTML = randomNumber;
      messageEl.innerHTML = `You Guessed Correct...👌👌👌`;
      document.body.classList.add('win');
    }
    if (userGuess < randomNumber) {
      currScore--;
      scoreEl.innerHTML = currScore;
      messageEl.innerHTML = `Too Low, Guess a higher number 📈`;
    }
    if (userGuess > randomNumber) {
      currScore--;
      scoreEl.innerHTML = currScore;
      messageEl.innerHTML = `Too High, Guess a lower number 📉`;
    }

    if (currScore === 0) {
      document.body.classList.add('lose');
      checkBtn.disabled = true;
      messageEl.innerHTML = `Out of Guesses...🥲`;
    }

    console.log(currScore);
  } else {
    messageEl.innerHTML = `Enter number between 1 to 20`;
  }
});

againBtn.addEventListener('click', () => {
  currScore = 20;

  messageEl.innerHTML = `Start guessing...`;
  scoreEl.innerHTML = currScore;
  numberEl.innerHTML = `?`;
  document.body.classList.remove('win');
  document.body.classList.remove('lose');

  guessedNumber.value = ``;
  checkBtn.disabled = false;
});
