
const quotes = ["The purpose of our lives is to be happy.","You only live once, but if you do it right, once is enough.","Never let the fear of striking out keep you from playing the game.","Life is not a problem to be solved, but a reality to be experienced.","You never really learn much from hearing yourself speak.","Life is a flower of which love is the honey.","Live in the sunshine, swim the sea, drink the wild air."];
let quotecount = 0;

document.getElementById("newquote").addEventListener("click",buttonClicked1);
function buttonClicked1(){

  document.getElementById("text").innerHTML = quotes[quotecount];
  if(quotecount>5){
    quotecount = 0;
  }else{
  quotecount++;
}
}

const weekdate = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// const dayIDArr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let weekcount = 0;
let weekcountreverse = -1;
document.getElementById("next").addEventListener("click",buttonClicked2);
document.getElementById("previous").addEventListener("click", buttonClicked3);
function buttonClicked2(){
  if(weekcount>5){
    weekcount = 0;
  }
  else{
  weekcount++;

}

  document.getElementById("week").innerHTML = weekdate[weekcount];
  // document.documentGetElementById(dayIDArr[weekcount]).style.display = block
  // document.documentGetElementById(dayIDArr[weekcount+1]).style.display = none
}
function buttonClicked3(){
  if(weekcount<=6){
    weekcount--;
  }
  if(weekcount<0){
    weekcount=6;
  }
  document.getElementById("week").innerHTML = weekdate[weekcount];
  // document.documentGetElementById(dayIDArr[weekcount]).style.display = block
  // document.documentGetElementById(dayIDArr[weekcount-1]).style.display = none
}
/* Setting the default slide start index: */
document.getElementById("previous").addEventListener("click",previousSlide);
document.getElementById("next").addEventListener("click",nextSlide);
let slideIndex = 1;
/* We call the function that is implemented below: */
showSlides(slideIndex);
/* Increase the index by 1 - show the next slide: */
function nextSlide() {
    showSlides(slideIndex += 1);
}
/* Decrease the index by 1 - show the previous slide: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}
/* Set the current slide: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/* Flip function: */
function showSlides(n) {
    let i;
    /* We refer to the elements with the class name "item", that is, to the pictures: */
    let slides = document.getElementsByClassName("weekmenu");

    /* Checking the number of slides: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Loop through each slide in a for loop: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Making an element block: */
    slides[slideIndex - 1].style.display = "block";
}
