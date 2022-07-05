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

//make home slowly fade to transparnet as the window scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.screenY / homeHeight;
});


// show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
if(window.screenY > homeHeight/2){
  arrowUp.classList.add('visible');
} else {
  arrowUp.classList.remove('visible');
}
});

//handle click on the "arrow up" button

arrowUp.addEventListener('click', () => {
scrollIntoView('#home');
});

//프로젝트

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }
  projects.forEach((project) => {
    console.log(project.dataset.type);
    if(filter === '*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
    }
  });
});

/* 스크롤 함수 만들기 */
function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}