var randomNumber1= Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var rm1=  document.querySelectorAll("img")[0].setAttribute("src","images/dice" + randomNumber1 + ".png");

var randomNumber2= Math.random();
randomNumber2= randomNumber2*6;
randomNumber2= Math.floor(randomNumber2)+1;
var rm2=  document.querySelectorAll("img")[1].setAttribute("src","images/dice" + randomNumber2 + ".png");

if( randomNumber1> randomNumber2) {
   document.querySelector("h1").innerHTML="Player 1 Wins🎉";
   document.querySelector("h1").style.color="blue";

 }
 else if( randomNumber1<randomNumber2) {
   document.querySelector("h1").innerHTML="Player 2 Wins🎉";
   document.querySelector("h1").style.color="green";
 }
 else{
   document.querySelector("h1").innerHTML="Draw";
   document.querySelector("h1").style.color="red";
 }
