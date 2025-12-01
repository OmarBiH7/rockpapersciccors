console.log("Welcome to Rock, Paper, Scissors!");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Sciccors";
  }
}

console.log(getComputerChoice(3));

function getHumanChoice() {
  let Humanchoice = prompt("Enter Rock, Paper or Sciccors");

  let humanScore = 0;
  let computerScore = 0;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
