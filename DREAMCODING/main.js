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

//handle scrolling when tapping onthe nav bar menu

const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click', () => {
const target = event.target;
const link = target.dataset.link;
if(link == null){
  return;
}
  scrollIntoView(link);
});

//handle click on "contact me" button on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener("click", () => {
  scrollIntoView('#contact');

});

/* 스크롤 함수 만들기 */
function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}