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
    let humanWin = false;
    let computerWin = false;
    if (humanChoice === computerChoice) {
        msg = `Draw! Both are ${humanChoice}.`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        msg = `Win! ${humanChoice} wins over ${computerChoice}.`;
        humanWin = true;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        msg = `Win! ${humanChoice} wins over ${computerChoice}.`;
        humanWin = true;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        msg = `Win! ${humanChoice} wins over ${computerChoice}.`;
        humanWin = true;
    } else {
        msg = `Lose! ${humanChoice} lose to ${computerChoice}.`;
        computerWin = true;
    }
    // console.log(msg);
    result.textContent = msg;
    if (humanWin) humanScore++;
    if (computerWin) computerScore++;
    score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

}

function playGame(humanChoice) {
    let computerChoice;

    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (humanScore === 5) {
        score.textContent += "\nHuman Win!!!!";
    } 
    if (computerScore === 5) {
        score.textContent += "\nComputer Win!!!";
    }

}

let humanScore = 0;
let computerScore = 0;

// playGame();
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result")
const score = document.querySelector("#score");

rockBtn.addEventListener("click", () => { playGame("rock"); });
paperBtn.addEventListener("click", () => { playGame("paper"); });
scissorsBtn.addEventListener("click", () => { playGame("scissors"); });