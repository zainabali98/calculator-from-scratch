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
    event.target.textContent;
    console.log(clickOnNumber)


    if (!number1 && !number2 && !operator) {
        number1 = event.target.textContent
        displayElement.textContent = number1
    }
    else if(number1 && !number2 && !operator) {
        number2 = event.target.textContent
        displayElement.textContent = number1
    }
    else if(number1 && !operator && !number2) {
        operator = event.target.textContent
        displayElement.textContent = operator
    }


    console.log(number1 )

}

clickOnNumber();



function clickOnOperator(event){
    event.target.textContent
    displayElement.textContent // where do i put this

    if(operator === '+'){
        return number1 + number2
    }
    else if(operator === '-'){
        return number1 - number2
    }
    else if(operator === '*'){
        return number1 * number2
    }
    else if(operator === '/'){
        return number1 / number2
    }
}






/// 4. addEventListener to the functions I have. 
for (let i = 0; 0 < numberElements.length; i++) {
    numberElements.addEventListener('click', clickOnNumber)
}

for (let i = 0; 0 < operatorsElements.length; i++) {
    operatorElements.addEventListener('click', )
}

for (let i = 0; 0 < equalElement.length; i++) {
    operatorElements.addEventListener('click', )
}


