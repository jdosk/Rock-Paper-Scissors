// Global Variables
let humanScore = 0;
let computerScore = 0;

// Dom Selectors
const buttons = document.querySelectorAll(".btn");
const results = document.querySelector(".results");
const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");
const outcome = document.querySelector(".outcome");


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
function getHumanChoice(e) {
    return e.toLocaleLowerCase();
}

// Function to play a round - get both choices, then define the winner and add to score
function playRound(getComputerChoice, getHumanChoice) {
    const humanChoice = getHumanChoice;
    const computerChoice = getComputerChoice;

    // Display choices
    results.textContent = "\nYou chose " + humanChoice + " and the computer chose " + computerChoice + ". ";

    // Switch to check computer choice against player choice, then edit & diisplay scores
    switch (humanChoice) {
        case "paper":
            if (computerChoice == "paper") {
                results.textContent += ("This round is a Tie!");
            } else if (computerChoice == "scissors") {
                results.textContent += ("You Lose this round!");
                computerScore++;
                cpuScore.textContent = "Computer: " + computerScore;
            } else {
                results.textContent += ("You Win this round!");
                humanScore++;
                playerScore.textContent = "Player: " + humanScore;
            }
            break;
        case "scissors":
            if (computerChoice == "scissors") {
                results.textContent += ("This round is a Tie!");
            } else if (computerChoice == "rock") {
                results.textContent += ("You Lose this round!");
                computerScore++;
                cpuScore.textContent = "Computer: " + computerScore;
            } else {
                results.textContent += ("You Win this round!");
                humanScore++;
                playerScore.textContent = "Player: " + humanScore;
            }
            break;
        case "rock":
            if (computerChoice == "rock") {
                results.textContent += ("This round is a Tie!");
            } else if (computerChoice == "paper") {
                results.textContent += ("You Lose this round!");
                computerScore++;
                cpuScore.textContent = "Computer: " + computerScore;
            } else {
                results.textContent += ("You Win this round!");
                humanScore++;
                playerScore.textContent = "Player: " + humanScore;
            }
            break;
    }
}

// Event handler function, plays a round upon button click, then checks winner and 
//      removes event listeners if a winner is declared
function handleClick(event) {
    playRound(getComputerChoice(), getHumanChoice(event.target.id));
    if (checkWinner()) {
        buttons.forEach((btn) => {
            btn.removeEventListener("click", handleClick);
        });
    }           
}
// Add Event Handlers for the buttons
buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

// function to check if there is a winner. If a winner is found, return true and declare winner
function checkWinner() {
    if (humanScore == 5) {
        outcome.textContent = "You WIN!!!! Congratulations!";
        return true;
    } else if (computerScore == 5) {
        outcome.textContent = "You LOSE! Better luck next time."
        return true;
    } else return false;
}