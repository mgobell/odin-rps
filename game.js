console.log("Hello, World!");
console.log(GetComputerChoice());
console.log(GetComputerChoice());

function GetComputerChoice() {
    randInt = Math.floor(Math.random() * 3);
    switch(randInt) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors"
            break;
    }
}