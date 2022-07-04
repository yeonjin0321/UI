'use strict';
const navbar =document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.screenY > navbarHeight){
    navbar.classList.add('navbr--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }

    
});