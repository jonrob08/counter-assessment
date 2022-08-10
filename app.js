console.log('connected')

// Global Variables
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
let numberChoice = document.getElementById('numberChoice');
let currentNum = document.getElementById('currentNumber');

// Start number choice at 1
numberChoice.value = 1

console.log(numberChoice.value)

// App Functionality
// Addition
const addition = function() {
    sum = parseInt(numberChoice.value) + parseInt(currentNum.innerText)
    currentNum.innerText = `${sum}`

    if (sum > 0) {
        currentNum.style.color = 'black'
    } 
}

// Subtraction
const subtraction = function() {
    remainder = parseInt(currentNum.innerText) - parseInt(numberChoice.value)
    currentNum.innerText = `${remainder}`
    
    if (remainder < 0){
        currentNum.style.color = 'red'
    }
}

// Button Event Listeners
add.addEventListener('click', addition)
subtract.addEventListener('click', subtraction)
