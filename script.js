let on;
let compOrder = [];
let playerOrder = [];
let correct;
let turn;
let compTurn;
let flash;
let intervalId;
let sound;

const blueCard = document.querySelector(".blue");
const redCard = document.querySelector(".red");
const greenCard = document.querySelector(".green");
const yellowCard = document.querySelector(".yellow");
const onButton = document.querySelector(".on");
const startButton = document.querySelector(".start");
const turnCounter = document.querySelector(".turn")

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = "-";
    }
    else {
        on = false;
        turnCounter.innerHTML = "";
    }
});

startButton.addEventListener('click', (event) => {
    if (on) {
        play()
    }
})

function play() {
    order = [];
    playerOrder = [];
    flash = 0;
    turn = 1;
    correct = true;
    intervalId = 0;
    turnCounter.innerHTML = turn;
    for (let i = 0; i< 100; i++) {
        compOrder.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800)
}

function gameTurn() {
    on = false;

    if (flash == turn) {
        compTurn = false;
        on = true;
    }

    if (compTurn) {
        setTimeout(() => {
            if (compOrder[flash] == 1) one()
            if (compOrder[flash] == 2) two()
            if (compOrder[flash] == 3) three()
            if (compOrder[flash] == 4) four()
            flash++
        }, 200)
    }
}