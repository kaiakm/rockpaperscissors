console.log('Hello World!');

function getComputerChoice() {
    result = Math.floor(Math.random() * 3) + 1;
    
    if (result === 1) {
        console.log('rock');
    } else if (result === 2) {
        console.log('paper');
    } else if (result === 3) {
        console.log('scissors');
    } else {

    }
}

getComputerChoice();