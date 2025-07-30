// Function uses Math.random to return a random choice of rock, paper, scissors
function getComputerChoice() {
// TODO
    let choiceNum = Math.random() * 100;
    console.log(choiceNum);
    if (choiceNum > 60) {
        return "rock";
    } else if (choiceNum <= 30) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function takes user input to get human choice of rock, paper, scissors
function getHumanChoice() {
    return prompt("Make your choice: Rock, Paper, Scissors").toLocaleLowerCase();
}

// Scores to keep track of whos winning over multiple rounds
let humanScore = 0;
let computerScore = 0;

// Function to play a round - get both choices, then define the winner and add to score
function playRound(getComputerChoice, getHumanChoice) {
    // TODO
}

// Function to play a 5 round game
function playGame() {
    // TODO
}


/// FOR TESTING - DELETE ONCE NOT NEEDED
getComputerChoice();