
var ranvar=Math.floor(Math.random()*6+1);
var pathimg1="./images/dice"+ranvar+".png";
var ranvar2=Math.floor(Math.random()*6+1);
var pathimg2="./images/dice"+ranvar2+".png";
document.querySelectorAll("img")[0].setAttribute("src",pathimg1);
document.querySelectorAll("img")[1].setAttribute("src",pathimg2);
if (pathimg1>pathimg2)
{
    document.querySelector("h1").innerHTML="player1 won";
}
else if (pathimg1==pathimg2)
{
    document.querySelector("h1").innerHTML="draw";
}
else 
{
    document.querySelector("h1").innerHTML="player2 won";
}