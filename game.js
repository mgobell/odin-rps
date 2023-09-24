const startButton = document.querySelector('#start');
const scissorsButton = document.querySelector('#scissors');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');

const choicesMade = document.querySelector('#choices-made');
const roundResults = document.querySelector('#round-results');
const scoreDisplay = document.querySelector('#score');
const gameResults = document.querySelector('#game-results');
let playerScore = 0;
let computerScore = 0;
startButton.addEventListener('click', () => StartGame());

function AddRPSEventHandlers() {
    scissorsButton.addEventListener('click', () => SingleRound('Scissors'));
    rockButton.addEventListener('click', () => SingleRound('Rock'));
    paperButton.addEventListener('click', () => SingleRound('Paper'));
}

function StartGame() {
    playerScore = 0;
    computerScore = 0;
    AddRPSEventHandlers();
    choicesMade.textContent = 'Select your choice!';
    roundResults.textContent = '';
    scoreDisplay.textContent = `The score is: You - ${playerScore}, Computer - ${computerScore}`;
    gameResults.textContent = '';
    DisplayToggle(startButton);
    DisplayToggle(scissorsButton);
    DisplayToggle(rockButton);
    DisplayToggle(paperButton);
}

function DisplayToggle(button) {
    button.classList.toggle('visible');
    button.classList.toggle('hidden');
}
function UpdateGame(winner) {
    let results = '';
    if (winner === "Tie") results = "It's a tie!";
    else if (winner === 1) {
        results = "You win round!";
        playerScore++;
    } else if (winner === 2) {
        results = "Computer wins round!";
        computerScore++;
    }
    roundResults.textContent = results;
    scoreDisplay.textContent = `The score is: You - ${playerScore}, Computer - ${computerScore}`;
    if (playerScore === 5) {
        EndGame(1);
    } else if (computerScore === 5) {
        EndGame(2);
    }
}

function EndGame(winner) {
    DisplayToggle(startButton);
    DisplayToggle(scissorsButton);
    DisplayToggle(rockButton);
    DisplayToggle(paperButton);
    
    if (winner === 1) gameResults.textContent = 'You won! Play again?';
    else if (winner === 2) gameResults.textContent = 'Computer won! Play again?';
}
function GetComputerChoice() {
    return ParseChoice(Math.floor(Math.random() * 3) + 1);
}
function ParseChoice(choice) {
    switch(choice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"
            break;
    }
}

function SingleRound(playerChoice) {
    let computerChoice = GetComputerChoice();
    console.log(computerChoice);
    choicesMade.textContent = `You Chose: ${playerChoice}, Computer Chose: ${computerChoice}`;
    UpdateGame(DetermineRoundWinner(playerChoice, computerChoice));
}

function DetermineRoundWinner(player1, player2) {
    if (player1 === player2) return "Tie";
    switch(player1) {
        case "Rock":
            if (player2 === "Paper") {
                console.log("Paper beats rock!");
                return 2;
            } else {
                console.log("Rock beats Scissors!");
                return 1;
            }
            break;
        case "Paper":
            if (player2 === "Scissors") {
                console.log("Scissors beats Paper!");
                return 2;
            } else {
                console.log("Paper beats Rock!");
                return 1;
            }
            break;
        case "Scissors":
            if (player2 === "Rock") {
                console.log("Rock beats Scissors!");
                return 2;
            } else {
                console.log("Scissors beats Paper!");
                return 1;
            }
            break;
    }
}