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

function getHumanChoice() {
    let choice = prompt("What's your choice? rock, paper, scissors?");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let msg;
    let humanWin = true;
    if (humanChoice === computerChoice) {
        msg = `Draw! Both are ${humanChoice}.`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        msg = `Win! ${humanChoice} wins over ${computerChoice}.`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        msg = `Win! ${humanChoice} wins over ${computerChoice}.`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        msg = `Win! ${humanChoice} wins over ${computerChoice}.`;
    } else {
        msg = `Lose! ${humanChoice} lose to ${computerChoice}.`;
        humanWin = false;
    }
    console.log(msg);
    if (humanWin) humanScore++;
    else computerScore++;
}

function playGame() {
    let humanChoice;
    let computerChoice;
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();