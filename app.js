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
}
console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "it's a draw!";
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
      return "You lose! Paper beats Rock";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      return "You Win! Rock beats Scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      return "you win! Paper beats Rock";
    } else if (humanChoice === "Paper" && computerChoice === "Sciccors") {
      return "You lose! Sciccors beats Paper";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      return "You lose! Rock beats Sciccors";
    } else humanChoice === "Sciccors" && computerChoice === "Paper";
    return "You win! Scoccors beats Rock";
  }

  let humanScore = 0;
  let computerScore = 0;

  for (let playRound = 0; playRound < 5; playRound++) {}
}
console.log(computerChoice(playRound));
