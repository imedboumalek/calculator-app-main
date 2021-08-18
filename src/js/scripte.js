import {theme} from './theme.js';
theme();


const screen = document.querySelector('[data-screen]');
const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const del = document.querySelector('.del');
const rest = document.querySelector('[data-rest]');
const equal = document.querySelector('[data-equal]');


class Calculator {
    constructor(screen) {
        this.screen = screen;
        this.prev = 0;
        this.current = 0;
    }

    screenupdate(num) {
        if (num === '.' && this.screen.innerText.includes('.')) return
        // this.screen.innerText = this.screen.toString() + number.toString()
        this.screen.innerText = this.screen.innerText.toString() + num.toString()
    }

    operation(operate) {
        this.prev = parseInt(screen.innerText);
        this.screen.innerText = this.screen.innerText.toString() + operate.toString()
    }

    clear() {
        this.screen.innerText = ''
        this.operation = undefined
    }

    delete() {
        
    }
}

const calcul = new Calculator(screen)

number.forEach(e => {
    e.addEventListener('click', () => {
        calcul.screenupdate(e.innerText);
        //console.log(screen.innerText)
        console.log(parseInt(screen.innerText))
    })
})

operation.forEach(e => {
    e.addEventListener('click', () => {
        calcul.operation(e.innerText);
        console.log(parseInt(screen.innerText));
    })
})

rest.addEventListener('click', () => {
    calcul.clear()
})

del.addEventListener('click', () => {
    calcul.delete()
})




// number.forEach(e => {
//     e.addEventListener('click', () => {
//         console.log(e.innerText)
//     })
// })

// operation.forEach(e => {
//     e.addEventListener('click', () => {
//         console.log(e.innerText)
//     })
// })

// del.addEventListener('click', () => {
//     console.log(del.innerText)
// })

// rest.addEventListener('click', () => {
//     console.log(rest.innerText)
// })

// equal.addEventListener('click', () => {
//     console.log(equal.innerText)
// })