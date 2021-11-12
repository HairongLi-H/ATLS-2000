let pics = 7;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('gallery').innerHTML += "<img src='assets/" + pic + ".jpg'" + "class='gallerypic' id='pic" + pic+ "' />";
}
