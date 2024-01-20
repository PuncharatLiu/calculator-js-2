const mainScreen = document.getElementById("calculator-screen");
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operator = ["+", "-", "*", "/"];

// mainScreen.value = '0'
let switchData = false;
let firstNumber = '0';
let secondNumber = '0';
let operation = ''; 
let changeState = false;
let result = '0'

function getData(data){
    currentData = data;

    if (!changeState) {
        if (!switchData){
            if (number.includes(currentData)){
                if (firstNumber === '0' && currentData !== '.' ) {
                    firstNumber = currentData;

                } else if ( firstNumber === '.') {
                    firstNumber += '.'

                } else {
                 firstNumber += currentData;

                }
                mainScreen.value = firstNumber;
            } else if (operator.includes(currentData)) {
                operation = currentData;
                switchData = true;

            }

        } else if (switchData){
            if (operator.includes(currentData)) {
                operation = currentData;
            } else if (secondNumber === '0'){
                secondNumber = currentData;

            } else {
                secondNumber += currentData;

            }

            if (!operator.includes(currentData)) {
                mainScreen.value = secondNumber;
            }
         
        }  
    } else if (changeState) {
        if (number.includes(currentData)) {
            result = currentData;
            mainScreen.value = result;
        } else if (operator.includes(currentData)) {
            operation = currentData;
            switchData = true;

        } else if (switchData && number.includes(currentData)) {
            if (firstNumber === '0') {
                firstNumber = currentData;
            } else {
                firstNumber += currentData;
            }

        }
        
    }

console.log(firstNumber, secondNumber, result, operation);
}

function calculate() {
    if (!changeState) {
        if (operation === '+') {
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            result = result.toString();

        } else if ( operation === '-') {
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            result = result.toString();

        } else if ( operation === '*') {
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            result = result.toString();

        } else if ( operation === '/') {
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            result = result.toString();

        }
    } else if (changeState) {
        if (operation === '+') {
            result = parseFloat(result) + parseFloat(firstNumber);
            result = result.toString();

        } else if (operation === '-') {
            result = parseFloat(result) + parseFloat(firstNumber);
            result = result.toString();

        } else if (operation === '*') {
            result = parseFloat(result) + parseFloat(firstNumber);
            result = result.toString();

        } else if (operation === '/') {
            result = parseFloat(result) + parseFloat(firstNumber);
            result = result.toString();

        }

    }
    
    mainScreen.value = result;
    changeState = true;
    switchData = false;

}

function clearAllInput(){
    firstNumber = '0';
    secondNumber = '0';
    operation = '';
    switchData = false;
    changeState = false;
    result = '0'
    mainScreen.value = '0';
}


// const allowInput = ["+", "-", "*", "/", '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')'];
// const allowKeyboardFunction = ['ArrowLeft', 'ArrowRight', 'Backspace', 'Enter'];
// document.addEventListener('keydown', (event) => {
//     console.log(event.key);
//     let keyboardInput = event.key;
//     if (allowInput.includes(keyboardInput)) {
//         // key += keyboardInput;

//         mainScreen.value += keyboardInput

//          // Test
//         console.log('from key ' + key);
//     }

//     // if (keyboardInput === )

//     if (keyboardInput === 'ArrowLeft') {
        
//         // console.log(position);
//     }

// });



