function getComputerChoice(){
    let choice = Math.floor(Math.random()*100)%3;

    if(choice == 0) return "Rock";
    else if(choice == 1) return "Paper";
    else return "Scissor";
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) return "Tie!";
    else if (playerSelection == "rock"){
        if(computerSelection == "scissor") return "you win! rock beats scissor"
        else return "you loose! paper beats rock"
    }
    else if (playerSelection == "scissor"){
        if(computerSelection == "rock") return "you loose! rock beats scissor";
        else return "you win! scissor beats paper";
    }
    else{
        if(computerSelection == "rock") return "you win! paper beats rock";
        else return "you loose! scissor beats paper";
    }
}

function game(){
    let pp = 0;
    let cp = 0;
    for(let i=0; i<5; ++i){
        let pS = prompt("Enter your move?");
        let cS = getComputerChoice();
        let result = playRound(pS, cS);
        if(result == "Tie!");
        else if(result.charAt(4) == 'w') pp++;
        else cp++;
    }
    if(pp > cp) return "you Win!";
    else if(pp < cp) return "you Loose!";
    else return "It's a Tie!";
}

console.log(game());

