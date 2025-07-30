// Function uses Math.random to return a random choice of rock, paper, scissors
function getComputerChoice() {
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
    const humanChoice = getHumanChoice;
    const computerChoice = getComputerChoice;

    console.log("You chose " + humanChoice + " and the computer chose " + computerChoice);

    switch (humanChoice) {
        case "paper":
            if (computerChoice == "paper") {
                console.log("\nThis round is a Tie!\n");
            } else if (computerChoice == "scissors") {
                console.log("\nYou Lose this round!\n");
                computerScore++;
            } else {
                console.log("\nYou Win this round!\n");
                humanScore++;
            }
            break;
        case "scissors":
            if (computerChoice == "scissors") {
                console.log("\nThis round is a Tie!\n");
            } else if (computerChoice == "rock") {
                console.log("\nYou Lose this round!\n");
                computerScore++;
            } else {
                console.log("\nYou Win this round!\n");
                humanScore++;
            }
            break;
        case "rock":
            if (computerChoice == "rock") {
                console.log("\nThis round is a Tie!\n");
            } else if (computerChoice == "paper") {
                console.log("\nYou Lose this round!\n");
                computerScore++;
            } else {
                console.log("\nYou Win this round!\n");
                humanScore++;
            }
            break;
    }

}

// Function to play a 5 round game
function playGame() {
    // TODO
}


/// FOR TESTING - DELETE ONCE NOT NEEDED
