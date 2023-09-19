Game();

function GetComputerChoice() {
    return ParseChoice(Math.floor(Math.random() * 3) + 1);
}

function GetPlayerChoice() {
    let choice = 0;
    while (choice < 1 || choice > 3 || Number.isNaN(choice)) {
    choice = parseInt(prompt("Please choose!\n1: Rock\n2: Paper\n3: Scissors"));
    }
    return ParseChoice(choice);
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

function SingleRound() {
    let computerChoice = GetComputerChoice();
    console.log(computerChoice);
    let playerChoice = GetPlayerChoice();
    return DetermineRoundWinner(playerChoice, computerChoice);
}

function Game() {
    let round;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        round = SingleRound();
        if (round === "Tie") console.log("It's a tie!");
        else if (round === 1) {
            console.log("You win!");
            playerScore++;
        } else if (round === 2) {
            console.log("Computer wins!");
            computerScore++;
        }
        console.log(`The score is: You - ${playerScore}, Computer - ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else console.log("Not sure what happened! Tie?");
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