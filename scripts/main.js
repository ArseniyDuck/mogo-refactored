// Burger Menu
const burger = document.querySelector('.banner__burger');
const list = document.querySelector('.banner__nav-list');

burger.onclick = function(event) {
   burger.classList.toggle('active');
   document.body.classList.toggle('disable-scroll');
   list.classList.toggle('active');
}


// Spoilers 
const arrows = document.querySelectorAll('.spoilers__arrow');

arrows.forEach(currentArrow => {
   currentArrow.onclick = function(event) {
      arrows.forEach(elem => {
         if (elem == currentArrow) {
            elem.parentNode.parentNode.classList.toggle('active');
         } else {
            elem.parentNode.parentNode.classList.remove('active');
         }
      });

   };
});


// Slider
$(document).ready(function(){
    $(".slider__wrapper").slick();
})