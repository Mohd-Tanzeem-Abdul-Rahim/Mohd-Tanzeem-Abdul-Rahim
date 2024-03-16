var randomNumber0 =Math.floor((Math.random()*6)+1);
var randomDiceNumber0 = "images/dice"+randomNumber0+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceNumber0);

var randomNumber1 =Math.floor((Math.random()*6)+1);
var randomDiceNumber1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceNumber1);
 
var statement;
if(randomNumber0<randomNumber1){
    statement ="Player 2 Win";
} else if (randomNumber0>randomNumber1) {
    statement = "Player 1 Win";
} else {
    statement = "Draw";
}
document.querySelector("h1").textContent = statement;