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

// Get computer choice
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
    return computerChoice;
}

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt("What is your choice: \nChoose Rock, Paper, or Scissors: ")
    humanChoice = humanChoice.toUpperCase()
    if (humanChoice == 'ROCK' || humanChoice == 'PAPER' || humanChoice == 'SCISSORS') {
        return humanChoice;
    } else {
        getHumanChoice();
    }
}

// Scoring algorithm
// if computerChoice (cC) is Paper and humanChoice (hC) is Rock:
//      then computerScore (cS) is 1 and humanScore (hS) is 0
// otherwise if cC is ROCK and hC is SCISSORS:
//      then cS is 1 and hS is 0
// otherwise if cC is SCISSORS and hC is PAPER:
//      then cS is 1 and hS is 0
// otherwise if cC = PAPER && hC = ROCK:
//      then cS = 0, and hS = 1;
// ... "so on for two other options where cC is SCISSORS or PAPER"
// otherwise if cC == hC:
//      then it is a draw

function playRound(computerSelection, humanSelection) {
    let printStatement;
    if (
        (computerSelection == "PAPER" && humanSelection == "ROCK") ||
        (computerSelection == "ROCK" && humanSelection == "SCISSORS") ||
        (computerSelection == "SCISSORS" && humanSelection == "PAPER")
    ) {
        computerScore++;
        printStatement = console.log('Computer wins this round!')
    } else if (
        (computerSelection == "ROCK" && humanSelection == "PAPER") ||
        (computerSelection == "SCISSORS" && humanSelection == "ROCK") ||
        (computerSelection == "PAPER" && humanSelection == "SCISSORS")
    ) {
        humanScore++;
        printStatement = console.log('Hurray! You win this round!')
    } else {
        printStatement = console.log('Round Results: DRAW')
    }
    
    return printStatement;
}

// LOGIC TO PLAY THE ENTIRE GAME
let computerScore = 0;
let humanScore = 0;

function playGame() {
    let winnnerStatement;

    for (let i=0; i<5; i++) {
        let computerSelection = getComputerChoice()
        let humanSelection = getHumanChoice()
        playRound(computerSelection, humanSelection);
    }

    if (computerScore > humanScore) {
        winnnerStatement = console.log("Computer won the Game");
    } else if ( humanScore > computerScore) {
        winnnerStatement = console.log("Congratulations, You won!");
    } else {
        winnnerStatement = console.log("It's a draw!")
    }
    return winnnerStatement;
}

playGame()