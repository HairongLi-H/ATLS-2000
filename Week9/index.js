
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
}
function buttonClicked3(){
  if(weekcount<=6){
    weekcount--;
  }
  if(weekcount<0){
    weekcount=6;
  }
  document.getElementById("week").innerHTML = weekdate[weekcount];
}

document.getElementById("previous").addEventListener("click",previousSlide);
document.getElementById("next").addEventListener("click",nextSlide);
let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("weekmenu");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Making an element block: */
    slides[slideIndex - 1].style.display = "block";
}
