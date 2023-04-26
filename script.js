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
            }
        
    }
}


function game() {
    for (let i = 1; i <= 5; i++) {
        input = prompt(`Round ${i}: Rock, paper, or scissors?`);
        console.log(playRound(input, getComputerChoice()));
    }


    if (playerScore > computerScore) {
        console.log('Congrats! You win the game!');
    } else {
        console.log('Sorry, you lose!');
    }
}

game();