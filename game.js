const points = {
  player: 0,
  computer: 0
}
let round = 1;

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);

    if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
      points.player++;
      document.querySelector(".result").textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == computerSelection) {
      document.querySelector(".result").textContent = `It's a draw! You both chose ${playerSelection}`;
    } else {
      points.computer++;
      document.querySelector(".result").textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    document.querySelector(".player-points").textContent = "Player: " + points.player;
    document.querySelector(".computer-points").textContent = "Computer: " + points.computer;
  }
// }

function computerPlay() {
  const gameStates = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * gameStates.length); //random number (0 - 2 for array looping)
  return gameStates[randomNumber];
}

function game(playerSelection) {
  const firstTo = 5;
  // if(points.player < firstTo && points.computer < firstTo) {
    playRound(playerSelection)
    document.querySelector(".round").textContent = `Round ${round} over`;
    round++;
  // } else {
  if(points.player == firstTo || points.computer == firstTo) {
    document.querySelector(".result").textContent= logWinner();
    points.player = 0;
    points.computer = 0;
    round = 1;
  }
}

function logWinner() {
  if(points.player > points.computer) {
    return `***Player wins this game***`;
  } else if (points.player < points.computer) {
    return `***Computer wins this game***`;
  } else {
    return `***It's a draw!***`;
  }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
  // let playerSelection = button.name;
  game(button.name);
}));
