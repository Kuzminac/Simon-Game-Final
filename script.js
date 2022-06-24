let on;
let order = [];
let playerOrder = [];
let correct;
let turn;
let compTurn;
let flash;
let intervalId;
let sound = true;

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
        clearInterval(intervalId);
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
        order.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800)
}

function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one()
            if (order[flash] == 2) two()
            if (order[flash] == 3) three()
            if (order[flash] == 4) four()
            flash++
        }, 200)
    }
}

function one() {
    if (sound) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
    sound = true;
    redCard.style.backgroundColor = "tomato";
}

function two() {
    if (sound) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    sound = true;
    blueCard.style.backgroundColor = "lightskyblue";
}

function three() {
    if (sound) {
        let audio = document.getElementById("clip3");
        audio.play();
    }
    sound = true;
    yellowCard.style.backgroundColor = "lightyellow";
}

function four() {
    if (sound) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    sound = true;
    greenCard.style.backgroundColor = "lightgreen";
}

function clearColor() {
    redCard.style.backgroundColor = "darkred";
    blueCard.style.backgroundColor = "darkblue";
    yellowCard.style.backgroundColor = "goldenrod";
    greenCard.style.backgroundColor = "darkgreen";
}