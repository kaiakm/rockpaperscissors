function getComputerChoice () {
    let result = Math.floor(Math.random() * 3);

    if (result == 0) {
        return 'rock';
    } else if ( result == 1) {
        return 'paper';
    } else {
        return 'scissors';
    };
}

const body = document.querySelector('body');
const div = document.createElement('div');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

let roundCount = 0;
let humanScore = 0;
let computerScore = 0;

function playGame (btn) {
    
    function displayScore () {
        let score = document.createElement('p');
        score.textContent = `Your score: ${humanScore} - Computer\'s score: ${computerScore}`;
        div.appendChild(score);
    }

    function playRound (btn, getComputerChoice) {
        if (btn == paperBtn && getComputerChoice =='rock') {
            humanScore++;
            div.textContent = 'You win! Paper beats rock.';
            body.appendChild(div);
            displayScore();
        } else if (btn == paperBtn && getComputerChoice == 'scissors') {
            computerScore++;
            div.textContent = 'You lose! Scissors beats paper.';
            body.appendChild(div);
            displayScore();
        } else if (btn == rockBtn && getComputerChoice == 'paper') {
            computerScore++;
            div.textContent = 'You lose! Paper beats rock.';
            body.appendChild(div);
            displayScore();
        } else if (btn == rockBtn && getComputerChoice == 'scissors') {
            humanScore++;
            div.textContent = 'You win! Rock beats scissors.';
            body.appendChild(div);
            displayScore();
        } else if (btn == scissorBtn && getComputerChoice == 'paper') {
            humanScore++;
            div.textContent = 'You win! Scissors beats paper.';
            body.appendChild(div);
            displayScore();
        } else if (btn == scissorBtn && getComputerChoice == 'rock') {
            computerScore++;
            div.textContent = 'You lose! Rock beats scissors.';
            body.appendChild(div);
            displayScore();
        } else {
            div.textContent = 'It\'s a tie!';
            body.appendChild(div);
            displayScore();
        }
    }

    const computerSelection = getComputerChoice();
    playRound(btn, computerSelection);


    function declareWinner () {
        if (humanScore === 5) {
            div.textContent = 'Congrats, you\'re the winner!';
            body.appendChild(div);
            displayScore();
        } else if (computerScore === 5) {
            div.textContent = 'Sorry, you\'re the loser!';
            body.appendChild(div);
            displayScore();
        } else if (humanScore === 5 && computerScore === 5) {
            div.textContent = 'Somehow, it\'s a tie!';
            body.appendChild(div);
            displayScore();
        };
    }

    declareWinner();
}

rockBtn.addEventListener('click', () => {
    playGame(rockBtn);
});

paperBtn.addEventListener('click', () => {
    playGame(paperBtn);
});

scissorBtn.addEventListener('click', () => {
    playGame(scissorBtn);
});