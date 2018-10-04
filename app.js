'use strict'
let count = 0;

const incrementer = (event) => {
    if(event.target.nodeName === 'IMG'){
        count++;
        const increase = document.querySelector('.increase');
        increase.textContent = `${count}`;
    }
}

document.addEventListener('click', incrementer);