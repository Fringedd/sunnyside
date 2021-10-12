'use strict';
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hаmburger');

const openMenu = function () {
  navMenu.classList.remove('hidden');
};
const closeMenu = function () {
  if (!navMenu.classList.contains('hidden')) {
    navMenu.classList.add('hidden');
  }
};
hamburger.addEventListener('click', function () {
  if (navMenu.classList.contains('hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
});
