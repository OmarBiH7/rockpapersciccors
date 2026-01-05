console.log("Welcome to Rock, Paper, Sciccors!");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "sciccors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter Rock, Paper or Sciccors");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  console.log("score - you: ${humanScore} Computer: ${computerScore}");
}
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
}

console.log("score - you: ${humanScore} Computer: ${computerScore}");

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
