// Roshamobo

// our game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// We’ll use this function in the game to make the computer’s play.
// Tip: use the console to make sure this is returning the expected output before moving to the next step!


// create a function that returns one of three values (randomly generate a number between 1 and 3) and create a conditional

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1) + min);
}

function computerPlay() {
  let play = getRandomInt(1, 3);
  console.log(play)
}

computerPlay()
