let pics = 16;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('gallery').innerHTML += "<img src='assets/Art/" + pic + ".jpg'" + "class='gallerypic' id='pic" + pic+ "' />";
}
var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
