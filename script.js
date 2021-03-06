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
        clearColor();
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
    turn = 3;
    correct = true;
    intervalId = 0;
    turnCounter.innerHTML = turn -2;
    for (let i = 0; i< 100; i++) {
        order.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 1200)
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
        }, 300)
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

greenCard.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        four();
        check();
            setTimeout(() => {
                clearColor()
            }, 300)
    }
})

blueCard.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        two();
        check();
            setTimeout(() => {
                clearColor()
            }, 300)
    }
})

redCard.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        one();
        check();
            setTimeout(() => {
                clearColor()
            }, 300)
    }
})

yellowCard.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        three();
        check();
            setTimeout(() => {
                clearColor()
            }, 300)
    }
})

function check() {
    if (playerOrder[playerOrder.length -1] !== order[playerOrder.length - 1])
        correct = false;

    if (!correct) {
        turn = 0;
        turnCounter.innerHTML = "FAIL";
        setTimeout(() => {
            let audio = document.getElementById("clip6");
            audio.play();
        }, 10)
        setTimeout(() => {
            alert("YOU HAVE LOST");
        }, 200);

        on = true;

    }

    if (turn == playerOrder.length) {
        turn ++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn - 2;
        intervalId = setInterval(gameTurn, 1000)
        setTimeout(() => {
            alert("CONGRATULATIONS")
        }, 200)
        setTimeout(() => {
            let audio = document.getElementById("clip5");
            audio.play();
        }, 150)
    }
}