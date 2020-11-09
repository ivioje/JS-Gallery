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

// let div = document.querySelector('.bigTxt');
// let h1  =document.createElement('h1');
// h1.textContent="Programming Books Gallery";
// div.appendChild(h1);

let container = document.querySelector('.container');
let div1 = document.createElement('div');
div1.setAttribute('class', 'bigTxt');
div1.innerHTML = `<h1>Programming Books Gallery</h1>`;
container.append(div1);

let div2 = document.createElement('div');
div2.setAttribute('class', 'subTxt');
div2.innerHTML = `<h2>Read, Bookmark and Share!</h2>`;
container.append(div2);

let div3 = document.createElement('div');
div3.setAttribute('class', 'subTxt');
div3.innerHTML = `<h2>Over 100 Programming Books</h2>`;
container.append(div3);

let div4 = document.createElement('div');
div4.innerHTML = `<a href='#'>
  <button class='get-started'>Get Started</button>
</a>
`;
container.append(div4);
