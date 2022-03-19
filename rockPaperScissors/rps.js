// This function will select between rock paper or scissors
//
let j = 0;
let moves = ["Rock", "Paper", "Scissors", "end" ];
let wins = 0;
let losses = 0;
function playerPlay() {
    const i = prompt('Input number for choice: Rock [0], Paper [1], Scissors [2], End game [3]');
    return moves[i];
}
function computerPlay() {
   const i = Math.floor(Math.random() *3);
   return moves[i];
}

// Win lose functions
// function win(winTally) {
//     winTally++;
//     return winTally;
// }
// function loose() {
//     looseTally++;
//     return looseTally;
// }

function playRound(playerSelection, computerSelection) {   
    let tie = "You tie! ";
    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection){
                case 'Scissors':
                    console.log("You Win! " + playerSelection + " beats " + computerSelection);
                    wins++;
                    break;
                case 'Paper':
                    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                    losses++;
                    break;
                case 'Rock':
                    console.log(tie);
                    break;
            }
            break;
        case 'Scissors':
            switch (computerSelection){
                case 'Paper':
                    console.log("You Win! " + playerSelection + " beats " + computerSelection);
                    wins++;
                    break;
                case 'Rock':
                    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                    losses++; 
                    break;
                case 'Scissors':
                    console.log(tie);
                    break;
            }
            break;
        case 'Paper':
            switch (computerSelection){
                case 'Rock':
                    console.log("You Win! " + playerSelection + " beats " + computerSelection);
                    wins++;
                    break;
                case 'Scissors':
                    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                    losses++; 
                    break;
                case 'Paper':
                    console.log(tie);
                    break;
            }
            break;
        case 'end':
            console.log("Ending game");
            j = 5;
            break;
        default:
            console.log('Invalid Input');
            j = -1;
            break;
        }

}
function game() {
    let gameSelection ='';
    wins = 0;
    losses = 0;
    for ( j = 0; j <5; j++) {        
        //let playerSelection = playerPlay();
        //let computerSelection = computerPlay();
        playRound(playerPlay(),computerPlay());
        
    }
    let winTally = wins;
    let looseTally = losses;
    if (winTally>looseTally) {
        let gameCondition = "Player Wins! Score: " + winTally + " to " + looseTally;
        console.log('GAME OVER!');
        console.log(gameCondition);
    }
    else if (winTally<looseTally) {
        let gameCondition = "Player Looses! Score: " + winTally + " to " + looseTally;
        console.log('GAME OVER!');
        console.log(gameCondition);
    }
    else {
        console.log('GAME OVER!');
        console.log("Tie! Score "+ winTally + " to " + looseTally);
    }
}

