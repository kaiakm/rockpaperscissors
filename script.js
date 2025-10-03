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

console.log(getComputerChoice(3));