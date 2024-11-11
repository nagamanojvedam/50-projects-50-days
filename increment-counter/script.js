'use strict';

const counters = document.querySelectorAll('.item');

counters.forEach((counter) => {
  const el = counter.querySelector('span');
  el.innerText = '0';

  const updateCounter = function () {
    const target = +counter.dataset['target'];

    const value = +el.innerText;

    const increment = Math.ceil(target / 200);

    if (value < target) {
      el.innerText = increment + value;
      setTimeout(updateCounter, 1);
    } else {
      el.innerText = target;
    }
  };

  updateCounter();
});
