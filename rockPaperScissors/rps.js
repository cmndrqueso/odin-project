// This function will select between rock paper or scissors
//
let j = 0;
let moves = ["Rock", "Paper", "Scissors", "end" ];
let wins = 0;
let losses = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

// resetScore => wins = 0; 
function resetScore() {
    wins = 0;
    losses = 0;
}

function playerPlay(p) {
    const play = moves[p];
    return play;

}
function computerPlay() {
   const i = Math.floor(Math.random() * 3);
   return moves[i];
}

function playRound(p) {
    playerSelection = playerPlay(p);
    computerSelection = computerPlay();   
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
            j = 5; // Legacy from when game was 5 rounds early, would set counter to 5 to end loop.
            // resetScore => wins = 0;
            resetScore();
            break;
        default:
            console.log('Invalid Input');
            j = -1; // Legacy from when game was played in console.
            break;
        }
        tallyScore();
}
function tallyScore(){
    const win = document.getElementById('wins');
    win.textContent = wins;
    const lose = document.getElementById('losses');
    lose.textContent = losses;
}



















// Legacy stuff from when we where playing 5 rounds only.
// Keeping for reference for now.
// function game() {
//     let gameSelection ='';
//     wins = 0;
//     losses = 0;
//     let winTally = wins;
//     let looseTally = losses;
//     if (winTally>looseTally) {
//         let gameCondition = "Player Wins! Score: " + winTally + " to " + looseTally;
//         console.log('GAME OVER!');
//         console.log(gameCondition);
//     }
//     else if (winTally<looseTally) {
//         let gameCondition = "Player Looses! Score: " + winTally + " to " + looseTally;
//         console.log('GAME OVER!');
//         console.log(gameCondition);
//     }
//     else {
//         console.log('GAME OVER!');
//         console.log("Tie! Score "+ winTally + " to " + looseTally);
//     }
// }

