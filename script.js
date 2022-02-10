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

// create a function that reads user input
function getHumanPlay() {
  let play = prompt("Enter rock, paper, or scissors")
  return play
}
// create a function that cleans and compares user input to computerplay (i.e. plays a round)
function checkPlays(compPlay, humPlay) {
  humPlay = getHumanPlay().toLowerCase();
  compPlay = calcComputerPlay();
  console.log(humPlay)
  console.log(compPlay)
  if (humPlay === compPlay) {return "tie"}
  else if (humPlay === "rock" && compPlay === "scissors") {return "win"}
  else if (humPlay === "rock" && compPlay === "paper") {return "lose"}
  else if (humPlay === "paper" && compPlay === "rock") {return "win"}
  else if (humPlay === "paper" && compPlay === "scissors") {return "lose"}
  else if (humPlay === "scissors" && compPlay === "paper") {return "win"}
  else {return "lose"}
}
// create a function that displays the result
function showOutcome() {
  let outcome = checkPlays()
  if (outcome === "win") {
    console.log("congrats, you're a big winner")}
  else if (outcome === "lose") {console.log("bummer, you're a big loser")}
  else {console.log("well, I don't really know how to feel about this")}
}

showOutcome()
