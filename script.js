let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const result = Math.floor(Math.random() * 3);
    
    if (result === 0) {
        return 'rock';
    } else if (result === 1) {
        return 'paper';
    } else if (result === 2) {
        return 'scissors';
    } else {

    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            computerScore++;
            playerScore++;
            return 'I picked rock. It\'s a tie!';
        } else if (computerSelection ==='paper') {
            computerScore++;
            return 'I picked paper. You lose!';
        } else if (computerSelection === 'scissors') {
            playerScore++;
            return 'I picked scissors. You win!';
        } else {

        }
    } else if (playerSelection.toLowerCase() === 'paper') {
            if (computerSelection === 'rock') {
                playerScore++;
                return 'I picked rock. You win!';
            } else if (computerSelection ==='paper') {
                computerScore++;
                playerScore++;
                return 'I picked paper. It\'s a tie!';
            } else if (computerSelection === 'scissors') {
                computerScore++;
                return 'I picked paper. You lose!';
            } else {

            }
    } else if (playerSelection.toLowerCase() === 'scissors') {
            if (computerSelection === 'rock') {
                computerScore++;
                return 'I picked rock. You lose!';
            } else if (computerSelection ==='paper') {
                playerScore++;
                return 'I picked paper. You win!';
            } else if (computerSelection === 'scissors') {
                computerScore++;
                playerScore++;
                return 'I picked scissors. It\'s a tie!';
            } else {

            }
        
    } else {

    }
}

function game(choice) {
    function choice1 () {
        input = prompt('Rock, paper, or scissors?');
        return console.log(playRound(input, getComputerChoice()));
    }

    choice1();

    function choice2() {
        input = prompt('Rock, paper, or scissors?');
        return console.log(playRound(input, getComputerChoice()));
    }

    choice2();

    function choice3() {
        input = prompt('Rock, paper, or scissors?');
        return console.log(playRound(input, getComputerChoice()));
    }

    choice3();

    function choice4() {
        input = prompt('Rock, paper, or scissors?');
        return console.log(playRound(input, getComputerChoice()));
    }

    choice4();

    function choice5() {
        input = prompt('Rock, paper, or scissors?');
        return console.log(playRound(input, getComputerChoice()));
    }

    choice5();
}

(game());

    if (playerScore > computerScore) {
        console.log('Congrats! You win the game!');
    } else {
        console.log('Sorry, you lose!');
    }