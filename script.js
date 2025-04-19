
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

let computerScore = 0;
let humanScore = 0;
const winningScore = 5;

const buttons = document.querySelectorAll("button");
const scores = document.querySelector("div.scores");
const results = document.querySelector("div.game-results");

function gameOver() {
    if (humanScore >= winningScore || computerScore >= winningScore) {return true}
};

function playRound(computerSelection, humanSelection) {
    let printStatement;
    if (
        (computerSelection == "PAPER" && humanSelection == "ROCK") ||
        (computerSelection == "ROCK" && humanSelection == "SCISSORS") ||
        (computerSelection == "SCISSORS" && humanSelection == "PAPER")
    ) {
        computerScore++;
        printStatement = "Computer wins this round!";
    } else if (
        (computerSelection == "ROCK" && humanSelection == "PAPER") ||
        (computerSelection == "SCISSORS" && humanSelection == "ROCK") ||
        (computerSelection == "PAPER" && humanSelection == "SCISSORS")
    ) {
        humanScore++;
        printStatement = 'Hurray! You win this round!';
    } else {
        printStatement = 'Round Results: DRAW';
    }

    results.textContent = printStatement;
    scores.textContent = `Your Score: ${humanScore} vs Computer Score: ${computerScore}.`

    if (gameOver()) {
        announceWinner();
    } else {pass};
}

// LOGIC TO PLAY THE ENTIRE GAME

function announceWinner() {
    const winner = humanScore >= winningScore ? "You" : "Computer";
    results.textContent = `Game over! ${winner} won the game!`;

    // Add a reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.id = "reset";
    resetButton.addEventListener("click", resetGame);
    results.appendChild(resetButton);
}
// Reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    results.textContent = "Choose rock, paper, or scissors to start a new game!";
    
    // Remove the reset button if it exists
    const resetButton = document.querySelector("#reset");
    if (resetButton) {
        resetButton.remove();
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanSelection = button.id;
        let computerSelection = getComputerChoice();
        
        console.log(humanSelection);
        humanSelection = humanSelection.toUpperCase();
        playRound(computerSelection, humanSelection);


    })
})


// playGame()