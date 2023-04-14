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
            return 'It\'s a tie!';
        } else if (computerSelection ==='paper') {
            return 'You lose! Paper beats rock.';
        } else if (computerSelection === 'scissors') {
            return 'You win! Rock beats scissors.';
        } else {

        }
    } else if (playerSelection.toLowerCase() === 'paper') {
            if (computerSelection === 'rock') {
                return 'You win! Paper beats rock.';
            } else if (computerSelection ==='paper') {
                return 'It\'s a tie!';
            } else if (computerSelection === 'scissors') {
                return 'You lose! Scissors beats paper.';
            } else {

            }
    } else if (playerSelection.toLowerCase() === 'scissors') {
            if (computerSelection === 'rock') {
                return 'You lose! Rock beats scissors.';
            } else if (computerSelection ==='paper') {
                return 'You win! Scissors beats paper.';
            } else if (computerSelection === 'scissors') {
                return 'It\'s a tie!';
            } else {

            }
        
    } else {

    }
}

function game(choice) {
    choice = prompt('Rock, paper, or scissors?')
    return playRound(choice, getComputerChoice());
}

console.log(game());