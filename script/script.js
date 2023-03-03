const saluta = () => console.log('Hello Davide');

// ! add class navbarDark on navbar scroll
const header = document.getElementById('navbar');

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
};

// ! Update year copy footer
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
