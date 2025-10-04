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

function playRound (getHumanChoice, getComputerChoice) {
    if (getHumanChoice === 'paper' && getComputerChoice ==='rock') {
        console.log('You win! Paper beats rock.');
    } else if (getHumanChoice === 'paper' && getComputerChoice === 'scissors') {
        console.log('You lose! Scissors beats paper.');
    } else if (getHumanChoice === 'rock' && getComputerChoice === 'paper') {
        console.log('You lose! Paper beats rock.');
    } else if (getHumanChoice === 'rock' && getComputerChoice === 'scissors') {
        console.log('You win! Rock beats scissors.');
    } else if (getHumanChoice === 'scissors' && getComputerChoice === 'paper') {
        console.log('You win! Scissors beats paper.');
    } else if (getHumanChoice === 'scissors' && getComputerChoice === 'rock') {
        console.log('You lose! Rock beats scissors.');
    } else {
        console.log('It`s a tie!');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);