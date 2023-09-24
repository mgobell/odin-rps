const scissorsButton = document.querySelector('#scissors');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
let playerScore = 0;
let computerScore = 0;
const scoreDisplay = document.querySelector('#score');

StartGame();

function AddEventHandlers() {
    scissorsButton.addEventListener('click', () => SingleRound('Scissors'));
    rockButton.addEventListener('click', () => SingleRound('Rock'));
    paperButton.addEventListener('click', () => SingleRound('Paper'));
}

function StartGame() {
    playerScore = 0;
    computerScore = 0;
    AddEventHandlers();
}
function UpdateGame(winner) {
    if (winner === "Tie") console.log("It's a tie!");
    else if (winner === 1) {
        console.log("You win!");
        playerScore++;
    } else if (winner === 2) {
        console.log("Computer wins!");
        computerScore++;
    }
    console.log(`The score is: You - ${playerScore}, Computer - ${computerScore}`);
    if (playerScore === 5) {
        EndGame(1);
    } else if (computerScore === 5) {
        EndGame(2);
    }
    
}

function EndGame(winner) {
    if (winner === 1) console.log('You won!');
    else if (winner === 2) console.log('Computer won!');
    StartGame();
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