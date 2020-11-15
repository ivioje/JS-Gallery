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
let catalogue = document.querySelector('.catalogue');

//contents in the container div
let mainHeading = document.createElement('div');
mainHeading.setAttribute('class', 'bigTxt');
mainHeading.innerHTML = `<h1>Programming Books Gallery</h1>`;
container.append(mainHeading);

let subHeading1 = document.createElement('div');
subHeading1.setAttribute('class', 'subTxt');
subHeading1.innerHTML = `<h2>Read, Bookmark and Share!</h2>`;
container.append(subHeading1);

let subHeading2 = document.createElement('div');
subHeading2.setAttribute('class', 'subTxt');
subHeading2.innerHTML = `<h2>Over 100 Programming Books</h2>`;
container.append(subHeading2);

let headerBtn = document.createElement('div');
headerBtn.innerHTML = `<a href='#'>
  <button class='get-started'>Get Started</button>
</a>
`;
container.append(headerBtn);
