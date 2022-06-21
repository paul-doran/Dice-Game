// Roll Dice #1

var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

// Roll Dice #2

var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Heading Function

function whoWon(randomNumber1, randomNumber2) {

  if (randomNumber1 > randomNumber2) {

    var winner = "🚩Player 1 Wins!";

  } else if (randomNumber1 < randomNumber2) {

    var winner = "🚩Player 2 Wins!";

  } else {

    var winner = "Draw!"
  }

  return winner
}

// Dice left roll
document.querySelector(".img1").setAttribute("src", randomImageSource1);

//Dice right roll
document.querySelector(".img2").setAttribute("src", randomImageSource2);

// //Dice Winner

document.querySelector(".text").textContent = whoWon(randomNumber1, randomNumber2);
