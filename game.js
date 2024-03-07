// Iteration 2: Generate 2 random number and display it on the screen

let number1 = document.getElementById('number1');

let number2 = document.getElementById('number2');

function generateRandomNumber(){
    number1.innerHTML = Math.floor(Math.random() * 100) + 1;
    number2.innerHTML = Math.floor(Math.random() * 100) + 1;
}


// Iteration 3: Make the options button functional

var score = 0;

document.getElementById('greater-than').addEventListener('click', greaterThan);
document.getElementById('equal-to').addEventListener('click', equalTo);
document.getElementById('lesser-than').addEventListener('click', lesserThan);

function greaterThan() {
    if (Number(number1.innerHTML) > Number(number2.innerHTML)) {
        score++;
        generateRandomNumber();
        resetTime();
    } 
    else {
        gameOver();
    }
}

function equalTo() {
    if (Number(number1.innerHTML) === Number(number2.innerHTML)) {
        score++;
        generateRandomNumber();
        resetTime();
    } 
    else {
        gameOver();
    }
}

function lesserThan() {
    if (Number(number1.innerHTML) < Number(number2.innerHTML)) {
        score++;
        generateRandomNumber();
        resetTime();
    } 
    else {
        gameOver();
    }
}

function gameOver() {
    sessionStorage.setItem("score", score);
    window.location = "gameover.html";
}

// Iteration 4: Build a timer for the game


var time=5;

var timer=document.getElementById('timer');

timer.innerHTML=time;

var timerId;

function setTimer(){
    timerId=setInterval(function(){
        time--;
        if(time==0){
            window.location="gameover.html";
        }
        timer.innerHTML=time;
    },1000);
    sessionStorage.setItem("score",score)
}

function resetTime(){
    time=5;
    clearInterval(timerId);
    timer.innerHTML=time;
    setTimer();
}

setTimer();