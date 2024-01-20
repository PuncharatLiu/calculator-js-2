const mainScreen = document.getElementById("calculator-screen");
let key = '';
function getData(data){
    key += data;
    // display();
    
    // Test
    console.log(key);
}

function callCalculateFunction(){
    let call = calculateExpression(key);
    key = call.toString();
    
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
    
    // Test
    console.log(key);
}

function removeInput(){
   let remove = key.slice(0, -1);
   key = remove;
   
   // Test
   console.log(key);
}

const historyScreen = document.getElementById("history");
function displayHistory(){
    historyScreen.textContent = key;
}

// function display(){
//     mainScreen.textContent = key;
// }

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



