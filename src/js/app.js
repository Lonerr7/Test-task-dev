'use strict';

import * as functions from './modules/functions.js';

// Checking if browsers supports .webp
functions.isWebp();

// Changing language on btn press
const langBtn = document.querySelector('.menu__control_btn');
const textSpan = document.querySelector('.langText');

langBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (textSpan.innerHTML === 'RU') {
    textSpan.innerHTML = 'EN';
  } else {
    textSpan.innerHTML = 'RU';
  }
});
