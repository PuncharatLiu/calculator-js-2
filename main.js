// Get id from screen 
const mainScreen = document.getElementById("calculator-screen");

// List of number and operater
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operator = ["+", "-", "*", "/"];

// Default setting 
let switchData = false;     // To track if pressing operator yet?
let firstNumber = '0';      // Store number before pressing operator button.
let secondNumber = '0';     // Store number after pressing operator button. 
let operation = '';         // Store operator to be operation. 
let changeState = false;    // If 'false' do state 1, If 'ture' do state 2.
let result = '0'            // To store the result.
let firstOperater = true;
let after = true;
let afterTwo = true;
let isCal = false;
let isClickCalculateButton = true;

function getData(data){
    currentData = data;

     // Before pressing calculate button do this conditon. call first state 
    if (!changeState) {
        
         // To check that pressing number before operator 
        if (!switchData){
            
             // Check is it number? 
            if (number.includes(currentData)){
                    
                // Change the defult screen value with number pressing 
                if (firstNumber === '0' && currentData !== '.' ) {
                    firstNumber = currentData;
                    isClickCalculateButton = true;

                    // test
                    console.log('from 1')
                     
                // check if in firstNumber alredry has '.' and return.
                } else if (currentData === '.' && firstNumber.includes('.')) {
                    return;
                    
                // Add decimal.
                } else if ( firstNumber === '0') {
                    firstNumber += '.'

                    // test
                    console.log('from 2')

                // Add number
                } else {
                 firstNumber += currentData;
                 isClickCalculateButton = true;

                // test
                 console.log('from 3')
                }
                 
                // Show the first number to screen.
                mainScreen.value = firstNumber;
                
             // Store operator
            } else if (operator.includes(currentData)) {
                
                // when click operator button it calculate 
                if (isClickCalculateButton) {
                    calculate();
                    isClickCalculateButton = false; 
                    after = false;
                    afterTwo = false;
                    switchData = true;
                    secondNumber = '';
                }

                operation = currentData;
                switchData = true; // To accress second number.

                // test
                console.log('from 4')

            }
        
            // test
            console.log('from data 1')
        
            
        // After operator 
        } else if (switchData){
            
             // Change the operator. 
            if (operator.includes(currentData)) {
                
                if (isClickCalculateButton) {
                    calculate();
                    isClickCalculateButton = false;
                    after = false;
                    afterTwo = false;
                    switchData = true;
                    secondNumber = '';
                }

                operation = currentData;

                // test
                console.log('from 5')

            } else {
                        
                if ( secondNumber === '0' || secondNumber === '' && currentData === '.') {
                    
                    secondNumber = '0.';

                    // test
                    console.log('from 6')

                // decimal point handing
                } else if (currentData === '.' && secondNumber.includes('.')) {
                    return;

                    // reassign value to second number.
                } else if (secondNumber === '0'){
                    secondNumber = currentData;
                    isClickCalculateButton = true;

                    console.log('from 7')
                
                    // Add other number pressing to second number. 
                } else {
                    secondNumber += currentData;
                    isClickCalculateButton = true;

                    console.log('from 8')

                }
                
                // allow calculate when click operator when number store in second number. 
                isCal = true;
            }
             // Show second number to screen after pressing number
            if (!operator.includes(currentData)) {
                mainScreen.value = secondNumber;

                // test
                console.log('from 9')
            }

            // test
            console.log('from data 2')
         
        } 
    
        // test
        console.log('from first state');

        // Second state, when pressing calculator button.
    } else if (changeState) {
        if (operator.includes(currentData)) {
            if (isClickCalculateButton) {
                calculate();
                isClickCalculateButton = false;
                after = false;
                afterTwo = false;
                switchData = true;
                secondNumber = '';
            }
            operation = currentData;
            switchData = true;      // To tell that next I will store in second number.
            after = false;
            // after = true;

            // test 
            console.log('from 13')
        
        // After calculate, if pressing number it will show the new number to screen.
        } else if (after && !operator.includes(currentData)) {
            result = '';

            if (currentData === '.') {
                result = '0.';
                after = false;
                mainScreen.value = result;

                // test
                console.log('from 10')
                
            } else if (number.includes(currentData)) {
                result = currentData;
                after = false;
                mainScreen.value = result;
                isClickCalculateButton = true;

                // test
                console.log('from 11')

            }

        } else if (result.includes('.') && currentData === '.' && !switchData) {
           
            //test
            console.log('from this');
            return;

        } else if (!switchData && number.includes(currentData) || currentData === '.' && !switchData) {
            result += currentData;
            mainScreen.value = result;
            isClickCalculateButton = true;

            // test
            console.log('from 12');

        } else if (operator.includes(currentData) && !after) {
            
            if (isClickCalculateButton) {
                calculate();
                isClickCalculateButton = false;
                after = false;
                afterTwo = false;
                switchData = true;
                secondNumber = '';
            }
            operation = currentData;
            switchData = true;      // To tell that next I will store in second number.
            // after = true;

            // test
            console.log('from 13')

         // Store in second number.
        } else if (switchData && !operator.includes(currentData)) {
            if (afterTwo && !operator.includes(currentData)) {
                secondNumber = '';

                if (currentData === '.') {
                    secondNumber = '0.';
                    afterTwo = false;

                    // test
                    console.log('from 14')

                } else if (number.includes(currentData)) {
                    secondNumber = currentData;
                    afterTwo = false;
                    isClickCalculateButton = true;

                    // test 
                    console.log('from 15')

                }
                mainScreen.value = secondNumber;

            } else if (currentData === '.' && secondNumber.includes('.')) {
                
                // test 
                console.log('stop here');
                return;

            } else if (number.includes(currentData) || currentData === '.') {
                secondNumber += currentData;
                isClickCalculateButton = true;

                // test
                console.log('from 16')

            }

            mainScreen.value = secondNumber;
  
        }
        
        // test
        console.log('from second state.');
    } 

console.log(firstNumber, secondNumber, result, operation);
}

// To calculate
function calculate() {
    
    if (isCal) {
        if (!changeState) {
        
            if (operation === '+') {
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                result = result.toString();
                mainScreen.value = result;

                // test
                console.log('from 17')

            } else if ( operation === '-') {
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                result = result.toString();
                mainScreen.value = result;

                // test
                console.log('from 18')

            } else if ( operation === '*') {
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                result = result.toString();
                mainScreen.value = result;

                // test
                console.log('from 19')

            } else if ( operation === '/') {
                // if devide by 0, send Error.
                if (secondNumber === '0') {
                    alert('Error. click ok to reset.')
                   
                    // reset calculator after alert massage.
                    resetCalculator();
                   
                    // test
                    console.log('from 20')
                    
                    // finish the program.
                    return;

                } else {
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    result = result.toString();
                    mainScreen.value = result;

                    // test
                    console.log('from 21')
                }

            } 

        // ========== Second calculation state ========== //
        } else if (changeState) {
            if (operation === '+') {
                result = parseFloat(result) + parseFloat(secondNumber);
                result = result.toString();
                mainScreen.value = result;

                // test 
                console.log('from 22')

            } else if (operation === '-') {
                result = parseFloat(result) - parseFloat(secondNumber);
                result = result.toString();
                mainScreen.value = result;

                // test
                console.log('frome 23')

            } else if (operation === '*') {
                result = parseFloat(result) * parseFloat(secondNumber);
                result = result.toString();
                mainScreen.value = result;

                // test
                console.log('from 24')

            } else if (operation === '/') {
                if (secondNumber === '0') {
                    alert('Error. click ok to reset.');
                    resetCalculator();
                    
                    // test
                    console.log('from 25')
                    
                    // finish the program
                    return;

                } else {
                    result = parseFloat(result) / parseFloat(secondNumber);
                    result = result.toString();
                    mainScreen.value = result;

                    // test
                    console.log('from 26')

                }

            }

        }
        
        changeState = true; // set defult to 'true'
        switchData = false;
        isClickCalculateButton = false;
        after = true;
        afterTwo = true;
    }
}

 // clear all show number.
function resetCalculator(){
    
    // Set everything to defult value;
    firstNumber = '0';
    secondNumber = '0';
    operation = '';
    switchData = false;
    changeState = false;
    result = '0'
    firstOperater = true;
    after = true;
    afterTwo = true;
    isCal = false;
    isClickCalculateButton = true;
    error = false;
    mainScreen.value = '0'; 
    console.log('from 27')

}