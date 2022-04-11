let moves = ["Rock", "Paper", "Scissors", "end" ];
let wins = 0;
let losses = 0;

// Conditions wins, losses, tie.
function win() {
    wins++;
    const winMessage = "Player Wins! Score: " + wins + " to " + losses;
    console.log("Wins: " + wins);
    return winMessage;
}

function lose(){
    losses ++;
    const looseMessage = "Player Loses! Score: " + wins + " to " + losses;
    console.log("Losses: " + losses);
    return looseMessage;
}

function tallyScore(){

}

function tie(){
    console.log("Tie")
}

function resetScore() {
    wins = 0;
    losses = 0;
}


//  These functions are responsible for the moves.
function playerPlay(p) {
    const play = moves[p];
    return play;

}
function computerPlay() {
   const i = Math.floor(Math.random() * 3);
   return moves[i];
}

// This function contains the game logic
function playRound(p) {
    if(wins == 5 || losses == 5){
        wins = 0;
        losses = 0;
    }
    playerSelection = playerPlay(p);
    computerSelection = computerPlay();   
    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection){
                case 'Scissors':
                    wins++;
                    break;
                case 'Paper':
                    losses++;
                    break;
                case 'Rock':
                    tie();
                    break;
            }
            break;
        case 'Scissors':
            switch (computerSelection){
                case 'Paper':
                    wins++;
                    break;
                case 'Rock':
                    losses++;
                    break;
                case 'Scissors':
                    tie();
                    break;
            }
            break;
        case 'Paper':
            switch (computerSelection){
                case 'Rock':
                    wins++;
                    break;
                case 'Scissors':
                    losses++; 
                    break;
                case 'Paper':
                    tie();
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

// This updates the score at the bottom of the screen.
function tallyScore(){
    let message = '';

    if (wins > 5 || losses > 5){
        resetScore();
        message = '';
    }
    else if (wins == 5 ) {
        message = 'Player wins!'
    }
    else if (losses == 5 ){
        message = 'Player losses!'
    }
    
    const counter = document.getElementById('counter'); 
    counter.textContent = "Score: " + wins + " to " + losses;
    const result = document.getElementById('result');
    result.textContent = message
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});