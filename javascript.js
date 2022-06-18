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
        console.log("Tie!");
        return 2;
    }

    if (player === "rock"){
        if (computer === "paper"){
            console.log("You Lose! Paper beats Rock");
            return 0;
        }
        else if (computer === "scissors"){
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
    }

    if (player === "paper"){
        if (computer === "rock"){
            console.log("You Win! Paper beats Rock");
            return 1;
        }
        else if (computer === "scissors"){
            console.log("You Lose! Scissors beats Paper");
            return 0;
        }
    }
    
    if (player === "scissors"){
        if (computer === "rock"){
            console.log("You Lose! Rock beats Scissors");
            return 0;
        }
        else if (computer === "paper"){
            console.log("You Win! Scissors beats Paper");
            return 1;
        }  
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){

        let computerSelection = computerPlay();
        let playerSelection = prompt("Please enter Rock Paper or Scissors")
        let x = gameRound(computerSelection, playerSelection);

        if (x === 0){
            computerScore++;
        }
        else if (x === 1){
            playerScore++;
        }
    }
    
    if (playerScore > computerScore){
        return "The Player Wins!"
    }
    else if (computerScore > playerScore){
        return "The Computer Wins!"
    }
    else{
        return "The game ends in a Tie!"
    }
}

game()