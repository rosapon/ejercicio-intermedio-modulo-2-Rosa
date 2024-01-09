'use strict'

const btn = document.querySelector('.js-btn');



function getRandomNumber(max) {
    return Math.ceil(Math.random() * 9);
    };

let randomNumer = getRandomNumber();


const getRandomMove = () => {
    if(randomNumer <= 3) {
        return "piedra"
    } if (randomNumer >= 7) {
        return "papel"
    } else {
        return "tijera"
    }

};


const handleClick = () = {
    if ()
}

btn.addEventListener('click', handleClick);