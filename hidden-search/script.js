const searchBtn = document.getElementById('search-btn');
const inputBox = document.querySelector('.input-text-box');
const containerEl = document.querySelector('.container');

searchBtn.addEventListener('click', () => {
  inputBox.classList.toggle('hidden');
  inputBox.focus();
});
