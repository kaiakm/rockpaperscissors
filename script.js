function getComputerChoice (max) {
    let result = Math.floor(Math.random() * max);

    if (result === 0) {
        return "rock";
    } else if ( result === 1) {
        return "paper";
    } else {
        return "scissors";
    };
}

function getHumanChoice () {
    let input = prompt('Rock, paper, or scissors?');

    if (input.toLowerCase() === 'rock') {
        console.log("rock");
    } else if (input.toLowerCase() === 'paper') {
        console.log("paper");
    } else if (input.toLowerCase() === 'scissors') {
        console.log("scissors");
    } else {
        console.log("Invalid. Try again!");
    };
}

let humanScore = 0;
let computerScore = 0;