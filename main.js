'use strict'

const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const resultMsg = document.querySelector('.js-result');



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
        (select.value === "tijera" && randomMove === "papel") ||
        (select.value === "papel" && randomMove === "piedra")
    ) {
        resultMsg.innerHTML = "¡Has ganado!"
    } else {
        resultMsg.innerHTML = "Has perdido"
    };
    
    
     
};

const handleClick = (event) => {
    event.preventDefault()
    getRandomNumber()
    compareUserMove()
    
};

btn.addEventListener('click', handleClick); 







