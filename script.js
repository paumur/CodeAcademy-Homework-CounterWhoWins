var score = document.getElementsByTagName("h2")[0];
var playingTo = document.getElementsByTagName("p")[0];
var input = document.getElementsByTagName("input")[0];
var playerOne = document.querySelectorAll("button")[0];
var playerTwo = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var valuePlayerOne = 0;
var valuePlayerTwo = 0;
var inputValue = 0;

//INPUT
input.addEventListener("input", updateValue);

function updateValue(e) {
  if (e.target.value == 0) {
    alert("Prašome nurodyti taškų skaičių didesnį už 0");
  }
  if (e.target.value > 0) {
    inputValue = e.target.value;
    playingTo.innerHTML = `Playing to: ${inputValue}`;
  }
}

function checkAnswer() {
  if (valuePlayerOne == inputValue) {
    document.getElementsByTagName("span")[0].style.color = "green";
    playerOne.removeEventListener("click", buttonResponse);
    playerTwo.removeEventListener("click", buttonResponse2);
    var newElement = document.createElement("h2");
    newElement.innerHTML = `Player 1 is a winner! <br> <iframe src="https://giphy.com/embed/l44Q6Etd5kdSGttXa" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
    document.querySelector(".whoWon").append(newElement);
  }
  if (valuePlayerTwo == inputValue) {
    document.getElementsByTagName("span")[1].style.color = "red";
    playerTwo.removeEventListener("click", buttonResponse2);
    playerOne.removeEventListener("click", buttonResponse);
    var newElement = document.createElement("h2");
    newElement.innerHTML = `Player 2 is a winner! <br> <iframe src="https://giphy.com/embed/o75ajIFH0QnQC3nCeD" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
    document.querySelector(".whoWon").append(newElement);
  }
}

// SCORE BUTTONS
playerOne.addEventListener("click", buttonResponse);

function buttonResponse() {
  if (inputValue == 0) {
    alert("Prašome nurodyti taškų skaičių didesnį už 0");
  } else {
    input.removeEventListener("input", updateValue);
    valuePlayerOne++;
    score.innerHTML = `<span>${valuePlayerOne}</span> to <span>${valuePlayerTwo}</span>`;
    checkAnswer();
  }
}

playerTwo.addEventListener("click", buttonResponse2);

function buttonResponse2() {
  if (inputValue == 0) {
    alert("Prašome nurodyti taškų skaičių didesnį už 0");
  } else {
    input.removeEventListener("input", updateValue);
    valuePlayerTwo++;
    score.innerHTML = `<span>${valuePlayerOne}</span> to <span>${valuePlayerTwo}</span>`;
    checkAnswer();
  }
}

reset.addEventListener("click", () => {
  input.addEventListener("input", updateValue);
  valuePlayerOne = 0;
  valuePlayerTwo = 0;
  score.innerHTML = `${valuePlayerOne} to ${valuePlayerTwo}`;
  playerOne.addEventListener("click", buttonResponse);
  playerTwo.addEventListener("click", buttonResponse2);
  var winner = document.querySelector("h2");
  winner.remove();
});
