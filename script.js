// Function uses Math.random to return a random choice of rock, paper, scissors
function getComputerChoice() {
    let choiceNum = Math.random() * 100;
    
    // Check math.random and set to a string value. Higher weight towards rock.
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



// Function to play a 5 round game
function playGame() {
    let i = 0;
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a round - get both choices, then define the winner and add to score
    function playRound(getComputerChoice, getHumanChoice) {
        const humanChoice = getHumanChoice;
        const computerChoice = getComputerChoice;

        console.log("\nYou chose " + humanChoice + " and the computer chose " + computerChoice);

        // Switch to check computer choice against player choice and return correct score
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

    // Game Begins Here
    console.log("Welcome to Rock, Paper, Scissors!\n");

    // While loop to iterate through the rounds
    while (i < 5) {
        playRound(getComputerChoice(), getHumanChoice());
        console.log("The current score is\nComputer: " + computerScore +"\nPlayer: " + humanScore);
        i++;
    }

    // Check scores and declare winner
    if (computerScore > humanScore) {
        console.log("Final Score:\nComputer: " + computerScore +"\nPlayer: " + humanScore +"\nGAME OVER - YOU LOSE");
    } else if (humanScore > computerScore) {
        console.log("Final Score:\nComputer: " + computerScore +"\nPlayer: " + humanScore +"\nGAME OVER - YOU WIN!!!");
    } else {
        console.log("Final Score:\nComputer: " + computerScore +"\nPlayer: " + humanScore +"\nGAME OVER - TIE");
    }
}


// Run the game
playGame();