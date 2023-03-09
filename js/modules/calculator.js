// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(num1,num2, operation){

}
// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
function add(num1,num2){
    let total = num1+num2;
    alert(`${num1} + ${num2} = ${total}`);
}

// SUBTRACT FUNCTION
function subtract(num1,num2){
    let total = num1-num2;
    alert(`${num1} - ${num2} = ${total}`);
}
// MULTIPLY FUNCTION
function multiply(num1,num2){
    let total = num1*num2;
    alert(`${num1} * ${num2} = ${total}`);
}
// DIVIDE FUNCTION
function divide(num1,num2){
    let total = num1/num2;
    alert(`${num1} / ${num2} = ${total}`);
}
// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add};
export {subtract};
export {multiply};
export {divide};