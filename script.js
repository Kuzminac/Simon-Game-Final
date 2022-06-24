let on;
let compOrder = [];
let playerOrder = [];
let correct;
let turn;
let compTurn;
let flash;

const blueCard = document.querySelector(".blue");
const redCard = document.querySelector(".red");
const greenCard = document.querySelector(".green");
const yellowCard = document.querySelector(".yellow");
const onButton = document.querySelector(".on");
const startButton = document.querySelector(".start");

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
    }
    else {
        on = false;
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
    for (let i = 0; i< 100; i++) {
        compOrder.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true
}