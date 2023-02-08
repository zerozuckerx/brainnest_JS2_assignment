const gameStates = ["rock", "paper", "scissors"];
const counts = {
  player: 0,
  computer: 0
}

function playRound(input) {
  //check if player started the game with an input
  input = prompt("Choose your weapon: Rock, paper or scissors?");

  let playerSelection = checkValid(input);
  if(playerSelection == undefined) {
    return
  } else {

    let computerSelection = computerPlay();
    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);

    if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
      counts.player++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == computerSelection) {
      return `It's a draw! You both chose ${playerSelection}`
    } else {
      counts.computer++;
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

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
    console.log(`Game record after round ${i}: \n***player ${counts.player}:${counts.computer} computer*** \n ________ \n|Round ${i+1}:|  \n ‾‾‾‾‾‾‾‾`)
  }
  console.log(playRound(input));
  console.log(logWinner());
  //reset game counts
  counts.player = 0;
  counts.computer = 0;
}

function logWinner() {	//print winner
  if(counts.player > counts.computer) {
    return `***Player wins this game with ${counts.player} points***`;
  } else if (counts.player < counts.computer) {
    return `***Computer wins this game with ${counts.computer} points***`;
  } else {
    return `***It's a draw! Both have ${counts.player} points.***`;
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  game();
});
