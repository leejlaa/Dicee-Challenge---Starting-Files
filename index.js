var rand = Math.floor(Math.random()*6)+1;
var randImage = "dice" + rand + ".png";
var randFolder = "images/"+randImage;
document.querySelector(".img1").setAttribute("src",randFolder);
var rand2 = Math.floor(Math.random()*6)+1;
var randImage2 = "dice" + rand2 + ".png";
var randFolder2 = "images/"+randImage2;
document.querySelector(".img2").setAttribute("src",randFolder2);
if(rand>rand2){
    document.querySelector("h1").innerHTML="Play 1 wins!";
}else if(rand2>rand){
    document.querySelector("h1").innerHTML="Play 2 wins";
}else{
    document.querySelector("h1").innerHTML="Draw.";
}