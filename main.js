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
                 
                 // Add decimal.
                } else if ( firstNumber === '.') {
                    firstNumber += '.'

                 // Add number
                } else {
                 firstNumber += currentData;

                }
                 
                // Show the first number to screen.
                mainScreen.value = firstNumber;
                
             // Store operator
            } else if (operator.includes(currentData)) {
                operation = currentData;
                 
                switchData = true; // To accress second number.

            }
        
            
        // After operator 
        } else if (switchData){
            
             // Change the operator. 
            if (operator.includes(currentData)) {
                operation = currentData;

             // reassign value to second number.
            } else if (secondNumber === '0'){
                secondNumber = currentData;
            
             // Add other number pressing to second number. 
            } else {
                secondNumber += currentData;

            }
             // Show second number to screen after pressing number
            if (!operator.includes(currentData)) {
                mainScreen.value = secondNumber;
            }
         
        }  // ========== End of first state ========== //
    

        // Second state, when pressing calculator button.
    } else if (changeState) {
         // After calculate, if pressing number it will show the new number to screen.
        if (number.includes(currentData)) {
            result = currentData;
            mainScreen.value = result;

         // Store operator for the next calculation
        } else if (operator.includes(currentData)) {
            operation = currentData;
            switchData = true;      // To tell that next I will store in second number.

         // Store in second number.
        } else if (switchData && number.includes(currentData)) {
            if (secondNumber === '0') {
                firstNumber = currentData;
            } else {
                secondNumber += currentData;
            }

        }
        
    } // ========== End second state ========== //


    // Test 
console.log(firstNumber, secondNumber, result, operation);
}

// To calculate
function calculate() {
    
    /* 
        I use firstNumber and secondNumber in first state. After calculation I  use the second calculation state which use the 'result' from first calculate 
    */
     
     // ========== First calculation state. ========== // 
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

        } // =========== End of first calculation state. ========== // 

     // ========== Second calculation state ========== //
    } else if (changeState) {
        if (operation === '+') {
            result = parseFloat(result) + parseFloat(secondNumber);
            result = result.toString();

        } else if (operation === '-') {
            result = parseFloat(result) + parseFloat(secondNumber);
            result = result.toString();

        } else if (operation === '*') {
            result = parseFloat(result) + parseFloat(secondNumber);
            result = result.toString();

        } else if (operation === '/') {
            result = parseFloat(result) + parseFloat(secondNumber);
            result = result.toString();

        }

    } // ========== End ============//
    
    mainScreen.value = result; // Show result to screen.
    changeState = true; // set defult to 'true'  
    switchData = false;

}

 // clear all show number.
function clearAllInput(){
    
    // Set everything to defult value;
    firstNumber = '0';
    secondNumber = '0';
    operation = '';
    switchData = false;
    changeState = false;
    result = '0'
    mainScreen.value = '0'; 

}