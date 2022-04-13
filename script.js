// Roshamobo

// our game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// We’ll use this function in the game to make the computer’s play.
// Tip: use the console to make sure this is returning the expected output before moving to the next step!



// create a function that randomly generates a number in a specified range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1) + min);
}
// create a function that calls getRandomInt and assigns the computer guess to a play (rock, paper, or scissors)
function calcComputerPlay() {
  let num = getRandomInt(1, 3);
  let play = (num === 1) ? "rock" :
  (num === 2) ? "scissors" :
  "paper";
  return play
}


// create event listeners on buttons that pass r,p, or s into the playRound function as humPlay

let computerScore = 0;
let humanScore = 0;
const btns = document.querySelectorAll("button")
btns.forEach((btn) => {
  btn.addEventListener("click", playRound);
})
// create divs to track scores
const humScore = document.createElement("div");
const scorebox = document.querySelector(".scores");
scorebox.appendChild(humScore);
humScore.textContent = "Human Score: 0"
const compScore = document.createElement("div");
scorebox.appendChild(compScore);
compScore.textContent = "Computer Score: 0"

// create a function that cleans and compares user input to computerplay (i.e. plays a round)
function playRound(humPlay, compPlay) {
  humPlay = event.target.id;
  compPlay = calcComputerPlay();
  if (humPlay === compPlay) {return "tie"}
  else if (humPlay === "rock" && compPlay === "scissors") {humanScore ++}
  else if (humPlay === "rock" && compPlay === "paper") {computerScore ++}
  else if (humPlay === "paper" && compPlay === "rock") {humanScore ++}
  else if (humPlay === "paper" && compPlay === "scissors") {computerScore ++}
  else if (humPlay === "scissors" && compPlay === "paper") {humanScore ++}
  else {computerScore ++}
  humScore.textContent = `Human Score: ${humanScore}`
  compScore.textContent = `Computer Score: ${computerScore}`
  if ((humanScore === 5) || (computerScore === 5)) {
    endGame(humanScore, computerScore)
  }
};

function endGame(hScore, cScore) {
  if (hScore === 5) {alert("You are a credit to your species")}
  if (cScore === 5) {alert("You've really let yourself down here")}
  humanScore = 0;
  computerScore = 0;
  // humScore.textContent = "Human Score: 0";
  // compScore.textContent = "Computer Score: 0";
}

// create a function called playGame that calls showOutcome 5 times and records results
// declare score variables, and counter
// playGame()
//
// function playGame() {
//   let computerScore = 0;
//   let humanScore = 0;
//   for (let i = 0; i < 5; i++) {
//     let outcome = showOutcome()
//     if (outcome === "win") {humanScore ++}
//     if (outcome === "lose") {computerScore ++}
//   }
//   console.log(`You scored ${humanScore}. The computer scored ${computerScore}.`)
//   if (humanScore > computerScore) {console.log("You are a credit to your species")}
//   else if (humanScore < computerScore) {console.log("You've really let yourself down here")}
//   else {console.log("Well, I really don't know how to feel about this")}
// }
