'use strict'

const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const resultMsg = document.querySelector('.js-result');
let player = document.querySelector('.js-player');
let computer = document.querySelector('.js-computer');
let playerPoints = 0;
let computerPoints = 0;
const resetBtn = document.querySelector('.js-reset');



function getRandomNumber(max) {
    const number = Math.ceil(Math.random() * 9);
    return number;
    
    };

const getRandomMove = () => {
    let randomNumer = getRandomNumber();
    if(randomNumer <= 3) {
        console.log("piedra")
        return "piedra" 
        
    } else if (randomNumer >= 7) {
        console.log("papel")
        return "papel"
        
    } else {
        console.log("tijera")
        return "tijera"
    }
};

const compareUserMove = () => {
    const randomMove = getRandomMove();
    if (select.value === randomMove) {
        resultMsg.innerHTML = "Empate"

    } else if (
        (select.value === "piedra" && (randomMove === "tijera" || randomMove === "papel")) ||
        (select.value === "tijera" && (randomMove === "papel")) ||
        (select.value === "papel" && (randomMove === "piedra")) 
        ) {
        resultMsg.innerHTML = "¡Has ganado!"
        playerPoints += 1;
        player.innerHTML = "Jugadora: " + playerPoints;

        
    } else {
        resultMsg.innerHTML = "Has perdido"
        computerPoints += 1;
        computer.innerHTML = "Computadora: " + computerPoints;

    };

    if (playerPoints === 10 || computerPoints === 10) {
        resetBtn.classList.remove('hidden');
        btn.classList.add('hidden');
    };  
};

const reset = () => {
    btn.classList.remove
};

const handleClick = (event) => {
    event.preventDefault()
    compareUserMove()
    
};

btn.addEventListener('click', handleClick); 

resetBtn.addEventListener('click', reset);










