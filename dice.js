//------------------------------------ changing image dice 1 ---------------------------

var randomNumber1 = Math.floor(Math.random()*6)+1;     // 1 - 6

var randomDiceImage1 = "dice"+randomNumber1+".png";    // selecting random images of dices

var randomImageSource1 = "images/"+randomDiceImage1;   // selecting folder

var image1 = document.querySelectorAll('img')[0];      // selecting image1

image1.setAttribute("src",randomImageSource1);         // changing the source of image

//------------------------------------ changing image dice 2 ----------------------------

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+randomNumber2+".png";

var randomImageSource2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src",randomImageSource2)

//---------------------------------- changing Title to display Winner -------------------

var changingTitle = document.querySelectorAll('h1')[0];

if (randomImageSource1 > randomImageSource2){
    changingTitle.innerHTML="🚩Player One Wins";

}else if(randomImageSource1<randomImageSource2){
    changingTitle.innerHTML = "Player Two Wins🚩";

}else{
    changingTitle.innerHTML = "🏁Draw😊"
}
