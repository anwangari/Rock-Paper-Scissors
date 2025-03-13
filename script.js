console.log("Hello World")

// GAME FLOW
// Decide the number of rounds to be played (5)
//     1. Get computer choice
//     2. Get human choice
//     3. Compare the two choices
//     4. Select the winner of the round
// Repeat n times
// Winner is the individual who wins most rounds overall
// If there is a draw, play one more round, winner is the winner of this round

// PSEUDO
// user inserts number of rounds to be played, and save in a variable `n`
// choices are hard coded = (rock, paper, scissors)
// get computer choice -> `choice1` (random among the three choices)
// get human choice -> `choice2`(non random)
// compare the choices and decide round winner (print -> Computer won round n)
// store number of times each competitior won in a counter variable
//     computer counter = `c_counter`
//     human counter = `h_counter`
// repeat up to n rounds
// compare computer count and human count and print -> `Computer (or Human) Won` 
// END Game with a Thank You note

function getComputerChoice() {
    const choice = Math.random()
    let computerChoice;

    if (choice <= 0.333333333) {
        computerChoice = 'ROCK'
    } else if (choice <= 0.666666666) {
        computerChoice = "PAPER"
    } else {
        computerChoice = "SCISSORS"
    }
    console.log('Computer choice:' + computerChoice)
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice: \nChoose Rock, Paper, or Scissors: ")
    humanChoice = humanChoice.toUpperCase()
    if (humanChoice == 'ROCK' || humanChoice == 'PAPER' || humanChoice == 'SCISSORS') {
        console.log('Human choice:' + humanChoice)
        return humanChoice;
    } else {
        getHumanChoice();
    }
}

getComputerChoice()
getHumanChoice()