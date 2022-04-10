let moves = ["Rock", "Paper", "Scissors", "end" ];
let wins = 0;
let losses = 0;
let score = wins + " to " + losses;

const counter = document.getElementById('counter'); 
counter.textContent = "Score: " + score;

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

function tie(){
    console.log("Tie")
}

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
    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection){
                case 'Scissors':
                    win(playerSelection, computerSelection);
                    break;
                case 'Paper':
                    lose(playerSelection, computerSelection);
                    break;
                case 'Rock':
                    tie();
                    break;
            }
            break;
        case 'Scissors':
            switch (computerSelection){
                case 'Paper':
                    win();
                    break;
                case 'Rock':
                    lose();
                    break;
                case 'Scissors':
                    tie();
                    break;
            }
            break;
        case 'Paper':
            switch (computerSelection){
                case 'Rock':
                    win();
                    break;
                case 'Scissors':
                    lose(); 
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


// Might be able to eliminate this entire function through arrow functions 
function tallyScore(){
    const counter =document.getElementById('counter');
    counter.textContent = score;
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});