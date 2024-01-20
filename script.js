const mainScreen = document.getElementById("calculator-screen");
const errorScreen =document.getElementById("error-display");
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operator = ["+", "-", "*", "/"];
let key = '';
let currentData = '';
let invalid = false;
function getData(data){
    currentData = data;
    validate();
    // key += data;
    
    
     // validate();
    // key += data;
    // display();
    
    // Test
    console.log(key);
}

function validate() {
    if (key[key.length - 1] === '/' && currentData === '/') {
        return;

    } else if (key[key.length - 1] === '*' && currentData === '*') {
        return;
        
    } else if (key[key.length - 1] === '+' && currentData === '+') {
        return;

    } else if (key[key.length - 1] === '-' && currentData === '-') {
        return;


    } else if (key[key.length - 1] === '*' && currentData === '/') {
        key = key.slice(0, 1);
        key += currentData;
        display();

    } else if (key[key.length - 1] === '/' && currentData === '*') {
        key = key.slice(0, 1);
        key += currentData;
        display();

    } else if (key[key.length - 1] === '+' && currentData === '-') {
        key = key.slice(0, 1);
        key += currentData;
        display();

    } else if (key[key.length - 1] === '-' && currentData === '+') {
        key = key.slice(0, 1);
        key += currentData;
        display();

    } else if (key[key.length - 1] === '+' && currentData === '*') {
        key = key.slice(0, 1);
        key += currentData;
        display();

    } else if (key[key.length - 1] === '+' && currentData === '/') {
        key = key.slice(0, 1);
        key += currentData;
        display();

    } else if (key[key.length - 1] === '-' && currentData === '*') {
        key = key.slice(0, 1);
        key += currentData;
        display();

    } else if (key[key.length - 1] === '-' && currentData === '/') {
        key = key.slice(0, 1);
        key += currentData;
        display();

    }
     else {
        key += currentData;
        display();
        console.log("wwwwwwwwww");

    }
}

function callCalculateFunction(){
    try {
        if (invalid) {
            errorScreen.textContent = 'Invalid expression.'
            historyScreen.textContent = 0;
        } else {
            let call = calculateExpression(key);
            key = call.toString();
            display();
        }
    } catch (error) {
        historyScreen.textContent = 0;
        errorScreen.textContent = 'Invalid expression.';
    }
    
    
    // let call = calculateExpression(key);
    // key = call.toString();
    // display();
    
    // Test
    console.log(key);
}

function calculateExpression(key){
    const calculator = new Function('return ' + key);

    const result = calculator();

    return result;
}

function clearAllInput(){
    key = '';
    display();
    
    // Test
    console.log(key);
}

function removeInput(){
   let remove = key.slice(0, -1);
   key = remove;
   display();
   
   // Test
   console.log(key);
}

const historyScreen = document.getElementById("history");
function displayHistory(){
    historyScreen.textContent = key;
}

function display(){
    mainScreen.value = key;
}



const allowInput = ["+", "-", "*", "/", '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')'];
const allowKeyboardFunction = ['ArrowLeft', 'ArrowRight', 'Backspace', 'Enter'];
document.addEventListener('keydown', (event) => {
    console.log(event.key);
    let keyboardInput = event.key;
    if (allowInput.includes(keyboardInput)) {
        // key += keyboardInput;

        mainScreen.value += keyboardInput

         // Test
        console.log('from key ' + key);
    }

    // if (keyboardInput === )

    if (keyboardInput === 'ArrowLeft') {
        
        // console.log(position);
    }

});

let num = "2"
console.log(parseFloat(num))

