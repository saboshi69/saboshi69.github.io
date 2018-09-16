var leftBtn = document.getElementsByClassName("leftBtn"); //define the left right button
var rightBtn = document.getElementsByClassName("rightBtn");
var slidesIndex = 1; // building an arry index for the gallery
showSlides(slidesIndex);
var slides = document.getElementsByClassName("bigSlide");
var slidesLength = slides.length;

leftBtn[0].addEventListener("click", turnLeft); // activating the funciton when click Button
rightBtn[0].addEventListener("click", turnRight);

var smallSlides = document.getElementsByClassName("smallSlide");


/* I dont know why but fuction dosent feel me
smallSlides[0].addEventListener("click", currentSlide(1));
smallSlides[1].addEventListener("click", currentSlide(2));
smallSlides[2].addEventListener("click", currentSlide(3));
smallSlides[3].addEventListener("click", currentSlide(4));

function currentSlide(n) {
    showSlides(slidesIndex = n);
} */



function turnLeft() {
    if (slidesIndex > 1) {
        showSlides(slidesIndex--);
    }
}

function turnRight() {
    if (slidesIndex < slidesLength) {
        showSlides(slidesIndex++);
    }
}


function showSlides(n) {

    /* variable defines inside the function because the for loop cant use global variable in the 2nd statement ie 'slides' inorder to get the .length I dont know why???? */
    var slides = document.getElementsByClassName("bigSlide");
    var Tslides = document.getElementsByClassName("smallSlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < Tslides.length; i++) {
        Tslides[i].className = Tslides[i].className.replace(" active", "");
    }
    slides[slidesIndex - 1].style.display = "block";
    Tslides[slidesIndex - 1].className += " active";

}
