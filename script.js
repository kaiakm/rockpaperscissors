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

rockBtn = document.querySelector('#rock');
paperBtn = document.querySelector('#paper');
scissorsBtn = document.querySelector('#scissors');
results = document.querySelector('#results');
score = document.querySelector('#score');
winner = document.querySelector('#winner');


function game() {
    let round = 1;

    function playGame(){
        if (round <= 5) {
            function onRockClick() {
                results.textContent = (playRound('rock', getComputerChoice()));
                round++;
                rockBtn.removeEventListener('click', onRockClick);
                playGame();
            }
    
            function onPaperClick() {
                results.textContent = (playRound('paper', getComputerChoice()));
                round++;
                paperBtn.removeEventListener('click', onPaperClick);
                playGame();
            }
    
            function onScissorsClick() {
                results.textContent = (playRound('scissors', getComputerChoice()));
                round++;
                scissorsBtn.removeEventListener('click', onScissorsClick);
                playGame();
            }
    
            rockBtn.addEventListener('click', onRockClick);
            paperBtn.addEventListener('click', onPaperClick);
            scissorsBtn.addEventListener('click', onScissorsClick);
        } else {
            if (playerScore > computerScore) {
                winner.textContent = 'You won the game!';
            } else if (computerScore > playerScore) {
                winner.textContent = 'I won the game!';
            } else {
                winner.textContent = 'It\'s a tie!';
            }
        }
    
        updateScore();
    }
    

    function updateScore() {
        score.textContent = `player: ${playerScore} - computer ${computerScore}`;
    }

    playGame();
};


game();