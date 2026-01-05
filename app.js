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

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      return console.log("it's a draw!");
    } else if (
      (humanChoice === "rock" && computerChoice === "sciccors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "sciccors" && computerChoice === "paper")
    ) {
      return console.log(`You Win! ${humanChoice} beats ${computerChoice} `);
      humanScore++;
    } else {
      return console.log(`You Win! ${computerChoice} beats ${humanChoice} `);
      computerScore++;
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log(`${humanScore} vs ${computerScore}`);

  if (humanScore > computerScore) {
    return console.log("You Win!");
  } else if (comnputerScore > humanScore) {
    return console.log("You Lose!");
  } else {
    return console.log("It's a Draw!");
  }
}

playGame();
