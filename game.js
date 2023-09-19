console.log("Hello, World!");
console.log(GetComputerChoice());
console.log(GetComputerChoice());
console.log(GetPlayerChoice());

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