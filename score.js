// Iteration 5: Store the player score and display it on the game over screen

let scoreBoard=document.getElementById('score-board');

document.getElementById('play-again-button').addEventListener('click',setTimeAndPlayAgian);

function setTimeAndPlayAgian(){
    window.location="game.html";
}

scoreBoard.innerHTML=sessionStorage.getItem("score");