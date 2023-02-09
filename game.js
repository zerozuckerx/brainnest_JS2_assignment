const gameStates = ["rock", "paper", "scissors"];
const points = {
  player: 0,
  computer: 0
}

function playRound(playerSelection) {
  //check if player started the game with an input
  // input = prompt("Choose your weapon: Rock, paper or scissors?");

  // let playerSelection = checkValid(input);
  // if(playerSelection == undefined) {
  //   return
  // } else {

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
    document.querySelector(".playerPoints").textContent = "Player: " + points.player;
    document.querySelector(".computerPoints").textContent = "Computer: " + points.computer;
  }
// }

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * gameStates.length); //random number (0 - 2 for array looping)
  return gameStates[randomNumber];
}

function checkValid(input) {
  input.toLowerCase();
  if(!gameStates.includes(input)) {
    console.log("Input not valid. Please choose rock, paper or scissors");
  } else {
    return input;
  }
}

function game(input) {
  console.log(` ________ \n|Round 1:| \n ‾‾‾‾‾‾‾‾`);
  //looping 4 times with "round counter", then once without
  for(let i=1; i<5; i++) {
    console.log(playRound(input));
    console.log(`Game record after round ${i}: \n***player ${points.player}:${points.computer} computer*** \n ________ \n|Round ${i+1}:|  \n ‾‾‾‾‾‾‾‾`)
  }
  console.log(playRound(input));
  console.log(logWinner());
  //reset game points
  points.player = 0;
  points.computer = 0;
}

function logWinner() {	//print winner
  if(points.player > points.computer) {
    return `***Player wins this game with ${points.player} points***`;
  } else if (points.player < points.computer) {
    return `***Computer wins this game with ${points.computer} points***`;
  } else {
    return `***It's a draw! Both have ${points.player} points.***`;
  }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
  // let playerSelection = button.name;
  playRound(button.name);
}));

document.querySelector(".playerPoints").textContent = "Player: " + points.player;
document.querySelector(".computerPoints").textContent = "Computer: " + points.computer;
