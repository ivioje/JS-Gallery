//format date
const date = document.querySelector('.cdate');
date.innerHTML = new Date().getFullYear();

//nav
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.tabs');
  const links = document.querySelectorAll('.tabs a');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav');

    burger.classList.toggle('toggle');
  });

  links.forEach((link, index) => {
    link.style.animation = `fadeLinks 0.5s ease forwards ${index / 7 + 1.8}s`;
  });
};

navSlide();

let div = document.querySelector('.bigTxt');
let h1  =document.createElement('h1');
h1.textContent="Programming Books Gallery";
div.appendChild(h1);





