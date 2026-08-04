// console.log('IT WORKS!')

// 1. variables I'll need
let number1 = null
let number2 = null
let operator = null


// 2. caching elements

const numberElements = document.querySelectorAll('.number')
// console.log(numberElements)
const operatorsElements = document.querySelectorAll('.ops')
// console.log(operatorsElements)
const equalElement = document.querySelector('.equal')
// console.log(equalElement)
const clearElement = document.querySelector('.clear')
// console.log(clearElement)
const displayElement = document.querySelector('#display')



// 3. what functions I need.
function clickOnNumber(event) {
    // event.target.textContent;
    console.log(clickOnNumber)


    if (!number1 && !number2 && !operator) {
        number1 = event.target.textContent
        displayElement.textContent = number1
    }
    else if (number1 && !number2 && !operator) {
        number1 = event.target.textContent
        displayElement.textContent = number1
    }
    else if (number1 && operator && !number2) {
        number2 = event.target.textContent
        displayElement.textContent = number2
    }
    else if (number1 && operator && number2) {
        number2 = event.target.textContent
        displayElement.textContent = number2
    }

    console.log('operator: ' + operator)
    console.log('number2: ' + number2)

}

clickOnNumber();



function clickOnOperator(){


    if(number1 && !operator && number2){
         operator = event.target.textContent
    }

}

clickOnOperator()












function clickOnkEqual(event) {
    event.target.textContent
    displayElement.textContent // where do i put this?

    if (operator === '+') {
        return Number(number1) + Number(number2)
    }
    else if (operator === '-') {
        return Number(number1) - Number(number2)
    }
    else if (operator === '*') {
        return Number(number1) * Number(number2)
    }
    else if (operator === '/') {
        return Number(number1) / Number(number2)
    }




}

function clickOnClear(event){
    if(event.target.textContent === 'C'){
        number1 = null
        number2 = null
        operator = null
        displayElement.textContent === ''
    }
}




/// 4. addEventListener to the functions I have. 



for (let i = 0; 0 < numberElements.length; i++) {
    numberElements.addEventListener('click', clickOnNumber)
}

for (let i = 0; 0 < operatorsElements.length; i++) {
    operatorElements.addEventListener('click',)
}

for (let i = 0; 0 < equalElement.length; i++) {
    operatorElements.addEventListener('click',)
}


