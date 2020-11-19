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



// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.navigation').classList.add('changeNav');
  } else {
    document.querySelector('.navigation').classList.add('returnNav');
  }
}

/*=======================================
 *validation - Sign Up
 *========================================
 */
function validate () {
  let errorMsg = document.querySelector('.message');
  let passwordString = 'password';

  if (document.form.username.value == '') {
    errorMsg.innerHTML = 'Name cannot be empty';
    
    document.form.username.focus();
    document.getElementById('name').classList.add(
      'animate__animated',
      'animate__shakeX'
    );

    return false;
  }

  if (document.form.password.value == '') {
    let errorMsg2 = document.querySelector('.message2');
    errorMsg2.innerHTML = 'Password is required';
    document.form.password.focus();
    return false;
  } else if (document.form.password.value.length <= 5) {
    let errorMsg2 = document.querySelector('.message2');
    errorMsg2.innerHTML = 'Password must be six or more characters long';
    document.form.password.focus();
    return false;
  } else if (
    document.form.password.value == passwordString ||
    document.form.password.value == passwordString.toUpperCase
  ) {
    let errorMsg2 = document.querySelector('.message2');
    errorMsg2.innerHTML = 'Your password cannot be password';
    document.form.password.focus();
    return false;
  }

  if (document.form.confirm.value !== document.form.password.value) {
    let errorMsg3 = document.querySelector('.message3');
    errorMsg3.innerHTML = 'passwords do not match';
    document.form.confirm.focus();
    return false;
  }
}
