// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

document.getElementById('play-button').addEventListener('click', playButtonGame);

function playButtonGame(){
    window.location="game.html";
}