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

/*
 *=============================================
 * header content
 *==============================================
 */

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

/*=======================================
 *Sign Up
 *========================================
 */
// function validateForm () {
//   let password = document.forms['signupForm']['password'].value;

//   if (password.length < 8) {
//     let para = document.createElement('p');
//     para.setAttribute = ('class', 'alert1');
//     para.innerHTML = `Password must be a minimum of 8 characters
// `;
//     return false;
//   }
// }

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  
    document.querySelector('.navigation').style.height = '9vh';
    document.querySelector('.navigation').style.backgroundColor = '#060711';
    document.querySelector('.navigation').style.boxShadow = '4px solid gray';

  } else {
    document.querySelector('.navigation').style.height = '13vh';
    document.querySelector('.navigation').style.backgroundColor = 'transparent';

   
  }
}
