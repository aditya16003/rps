function getComputerChoice(){
    let choice = Math.floor(Math.random()*100)%3;

    if(choice == 0) return "Rock";
    else if(choice == 1) return "Paper";
    else return "Scissor";
}

function clashResult(playerSelection, computerSelection){
    if(playerSelection === computerSelection) return "t";
    else if (playerSelection == "rock"){
        if(computerSelection == "scissor") return "w"
        else return "l"
    }
    else if (playerSelection == "scissor"){
        if(computerSelection == "rock") return "l";
        else return "w";
    }
    else{
        if(computerSelection == "rock") return "w";
        else return "l";
    }
}

function message(result){
    if (result == "t") return "Tie!";
    else if(result == "w")
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

function winMsg(playerSelection, computerSelection){
    let result = playRound(playerSelection, computerSelection);
    if (result == "Tie!") return 't';
    else if (result.charAt(4) == 'w') return 'w';
    else return 'l';
}

function game(){
    let pp = 0;
    let cp = 0;
    for(let i=0; i<5; ++i){
        let pS = prompt("Enter your move?");
        let cS = getComputerChoice();
        if(winMsg(pS, cS) == 't');
        else if(winMsg(pS, cS) == 'w')pp++;
        else  cp++;
    }
    if(pp > cp) return "Congratulations! you Win";
    else if(pp < cp) return "you Loose!";
    else return "It's a Tie!";
}

console.log(game());

