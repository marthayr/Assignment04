
let choice;
let compChoice

// Player makes a choice
function playerChoice(){
    do {
        choice = prompt('Rock, Paper, or Scissors?','rock');
        if(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
            alert(`Error. Please enter rock, paper, or scissors`);
        }
        else{
            return choice;
        }
    }while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors')
}

// Computer makes a choice
function computerChoice(){
compChoice = Math.floor(Math.random() * 3 + 1);

// Assign rock, paper, or scissor to the computer's choice
if(compChoice === 1){
    compChoice = 'rock';
}else if(compChoice === 2){
    compChoice = 'paper';
}else{
    compChoice = 'scissors'
}
}

//console.log(`Player chose ${choice}`);
//console.log(`Computer chose ${compChoice}`);

// Determine who wins
function getResult(){
    if (choice === compChoice){ // tie
        alert(`It\'s a tie! You both chose ${choice}.`);
    }
    else if (choice === 'rock' && compChoice === 'paper'){ //rock vs paper
        alert(`Player chose: ${choice}\nComputer chose: ${compChoice}\nPaper covers rock. You lose!`);
    }
    else if (choice === 'rock' && compChoice === 'scissors'){ // rock vs scissors
        alert(`Player chose: ${choice}\nComputer chose: ${compChoice}\nRock destroys scissors. You win!`);
    }
    else if (choice === 'paper' && compChoice === 'rock'){  //paper vs rock
        alert(`Player chose: ${choice}\nComputer chose: ${compChoice}\nPaper covers rock. You win!`);
    }
    else if (choice === 'paper' && compChoice === 'scissors'){ //paper vs scissors
        alert(`Player chose: ${choice}\nComputer chose: ${compChoice}\nScissors cut paper. You lose!`); 
    }
    else if (choice === 'scissors' && compChoice === 'rock'){ // scissors vs rock
        alert(`Player chose: ${choice}\nComputer chose: ${compChoice}\nRock destroys scissors. You lose!`);
    }
    else if (choice === 'scissors' && compChoice === 'paper'){ // scissors vs paper
        alert(`Player chose: ${choice}\nComputer chose: ${compChoice}\nScissors cut paper. You win!`);
    }
}

playerChoice();
computerChoice();
getResult();