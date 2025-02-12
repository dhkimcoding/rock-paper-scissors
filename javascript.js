// function getComputerChoice (void) => "rock" or "paper" or "scissors"
// functino getHumanChoice (void) => "rock" or "paper" or "scissors"
// function playRound (humanChoice, computerChoice) => void

function getComputerChoice() {
    let seed = Math.random() * 3;
    let choice;
    if (seed < 1) {
        choice = "rock";
    } else if (seed < 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

