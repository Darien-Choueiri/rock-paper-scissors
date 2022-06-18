/*generates computer moves*/
function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "Rock";
    }
    else if (choice === 1){
        return "Paper"
    }
    else if (choice === 2){
        return "Scissors"
    }
}

function gameRound(computerSelection, playerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === computer){
        return "Tie!";
    }

    if (player === "rock"){
        if (computer === "paper"){
            return "You Lose! Paper beats Rock";
        }
        else if (computer === "scissors"){
            return "You Win! Rock beats Scissors";
        }
    }

    if (player === "paper"){
        if (computer === "rock"){
            return "You Win! Paper beats Rock";
        }
        else if (computer === "scissors"){
            return "You Lose! Scissors beats Paper";
        }
    }
    
    if (player === "scissors"){
        if (computer === "rock"){
            return "You Lose! Rock beats Scissors";
        }
        else if (computer === "paper"){
            return "You Win! Scissors beats Paper";
        }  
    }
}

let playerSelection = "ROCK";
let computerSelection = computerPlay();
console.log(gameRound(computerSelection, playerSelection));