console.log("Welcome to Rock, Paper, Sciccors!");

function getComputerChoice(Rock, Paper, sciccors) {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else randomNumber === 3;
  {
    return "Sciccors";
  }
}

console.log(getComputerChoice(3));

function getHumanChoice() {
  let Humanchoice = prompt("Enter Rock, Paper or Sciccors");
  return Humanchoice;
}
console.log(getHumanChoice(3));

function playGame() {}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "it's a draw!";
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    return "You lose!  Paper beats Rock";
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    return "You Win! Rock beats Sciccors";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    return "you win! Paper beats Rock";
  } else if (humanChoice === "Paper" && computerChoice === "Sciccors") {
    return "You lose! Sciccors beats Paper";
  } else if (humanChoice === "Sciccors" && computerChoice === "Rock") {
    return "You lose! Rock beats Sciccors";
  } else humanChoice === "Sciccors" && computerChoice === "Paper";
  return "You win! Sciccors beats Paper";

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  let humanScore = 0;
  let computerScore = 0;
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
