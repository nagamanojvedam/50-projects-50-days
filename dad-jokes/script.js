'use strict';

const BASE_URL = `https://icanhazdadjoke.com/`;
const config = {
  headers: {
    Accept: 'application/json',
  },
};

const getJokeBtn = document.querySelector('.btn');
const jokeEl = document.querySelector('#joke');

getJoke();

getJokeBtn.addEventListener('click', getJoke);

async function getJoke() {
  const response = await fetch(BASE_URL, config);
  const data = await response.json();

  jokeEl.innerHTML = data.joke;
}
