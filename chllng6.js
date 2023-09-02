const playerText = document.querySelector("#playerText");
const compText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

let rock = rockButton.textContent;
let paper = paperButton.textContent;
let scissors = scissorsButton.textContent;
let Array = [rock, paper, scissors];

rockButton.addEventListener("click", rockBtnChosen);
paperButton.addEventListener("click", paperBtnChosen);
scissorsButton.addEventListener("click", scissorsBtnChosen);

function rockBtnChosen() {
  playerText.textContent = "PLAYER:" + rock;
  let x = Math.floor(Math.random() * 3);
  let compResult = Array[x];
  compText.textContent = "COMPUTER:" + compResult;
  rock == compResult
    ? (resultText.textContent = "RESULT: YOU WİN!")
    : (resultText.textContent = "RESULT: YOU LOST!");
}

function paperBtnChosen() {
  playerText.textContent = "PLAYER:" + paper;
  let x = Math.floor(Math.random() * 3);
  let compResult = Array[x];
  compText.textContent = "COMPUTER:" + compResult;
  paper == compResult
    ? (resultText.textContent = "RESULT: YOU WİN!")
    : (resultText.textContent = "RESULT: YOU LOST!");
}

function scissorsBtnChosen() {
  playerText.textContent = "PLAYER:" + scissors;
  let x = Math.floor(Math.random() * 3);
  let compResult = Array[x];
  compText.textContent = "COMPUTER:" + compResult;
  scissors == compResult
    ? (resultText.textContent = "RESULT: YOU WİN!")
    : (resultText.textContent = "RESULT: YOU LOST!");
}
