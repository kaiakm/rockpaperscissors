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

function getHumanChoice () {
    let input = prompt('Rock, paper, or scissors?');

    let lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput == 'rock') {
        return 'rock';
    } else if (lowerCaseInput == 'paper') {
        return 'paper';
    } else if (lowerCaseInput == 'scissors') {
        return 'scissors';
    } else {
        return 'Invalid!';
    };
}

let roundCount = 0;

function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (getHumanChoice, getComputerChoice) {
        if (getHumanChoice == 'paper' && getComputerChoice =='rock') {
            humanScore++;
            console.log('You win! Paper beats rock.');
        } else if (getHumanChoice == 'paper' && getComputerChoice == 'scissors') {
            computerScore++;
            console.log('You lose! Scissors beats paper.');
        } else if (getHumanChoice == 'rock' && getComputerChoice == 'paper') {
            computerScore++;
            console.log('You lose! Paper beats rock.');
        } else if (getHumanChoice == 'rock' && getComputerChoice == 'scissors') {
            humanScore++;
            console.log('You win! Rock beats scissors.');
        } else if (getHumanChoice =='scissors' && getComputerChoice == 'paper') {
            humanScore++;
            console.log('You win! Scissors beats paper.');
        } else if (getHumanChoice == 'scissors' && getComputerChoice == 'rock') {
            computerScore++;
            console.log('You lose! Rock beats scissors.');
        } else {
            console.log('It`s a tie!');
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    roundCount++;

    function declareWinner () {
        if (roundCount === 5 && humanScore > computerScore) {
            console.log('Congrats, you are the winner!');
        } else if (roundCount === 5 && humanScore < computerScore) {
            console.log('Sorry, you are the loser!');
        } else if (roundCount === 5 && humanScore === computerScore) {
            console.log('Somehow, it is a tie!');
        } else {
            '';
        }
    }

    declareWinner();
}

playGame();
playGame();
playGame();
playGame();
playGame();