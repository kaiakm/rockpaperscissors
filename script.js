function getComputerChoice () {
    let result = Math.floor(Math.random() * 3);

    if (result === 0) {
        return 'rock';
    } else if ( result === 1) {
        return 'paper';
    } else {
        return "scissors";
    };
}

function getHumanChoice () {
    let input = prompt('Rock, paper, or scissors?');

    if (input.toLowerCase() === 'rock') {
        return 'rock';
    } else if (input.toLowerCase() === 'paper') {
        return 'paper';
    } else if (input.toLowerCase() === 'scissors') {
        return 'scissors';
    } else {
        return 'Invalid!';
    };
}

let humanScore = 0;
let computerScore = 0;