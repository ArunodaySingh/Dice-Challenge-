var random1=Math.floor(Math.random() * 6)+1;
var randomimage="images/dice"+random1+".png";
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",randomimage);

var random2=Math.floor(Math.random() * 6)+1;
var randomimage2="images/dice"+random2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomimage2);;


if(random1>random2)
{
document.querySelector("h1").innerHTML=" PLAYER 1 WINS !";
}
if (random2>random1)
{
  document.querySelector("h1").innerHTML=" PLAYER 2 WINS !";


}
if(random1===random2)
{
  document.querySelector("h1").innerHTML="DRAW";

}
