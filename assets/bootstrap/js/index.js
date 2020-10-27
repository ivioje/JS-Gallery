// date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//back to top
// const topBtn = document.getElementById('top-btn');
// window.onscroll =function() { backToTop()};

// backToTop = () => {
// if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// topBtn.style.display = "block";
// } else {
//     topBtn.style.display ="none";
// }
// }

// function top() {
// document.body.scrollTop = 0 // For Safari
// document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
// }
const elem = document.querySelector('.animi');

// elem.addEventListener('scroll',function() {


// // gsap.to('.animi', { duration: 1, x: 50 })

// })

    gsap.to('.animi', { duration: 1, x: 50, onUpdate: function() {
       
    } })


// function move() {
// elem.gsap.to('.toll', { duration: 1, x: -50 })

// }

