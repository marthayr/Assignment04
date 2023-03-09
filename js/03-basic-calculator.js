// IMPORT THE MODULE
import {add} from "./modules/calculator.js";
import {subtract} from "./modules/calculator.js";
import {multiply} from "./modules/calculator.js";
import {divide} from "./modules/calculator.js";

let num1;
let num2;
let operation;

do{
// COLLECT FIRST NUMBER FROM USER
num1 = parseFloat(prompt('Enter your first number.'));
// COLLECT SECOND NUMBER FROM USER
num2 = parseFloat(prompt('Enter a second number'));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
operation = prompt('Choose an operation (+, -, *, /)');

// CHECK TO SEE WHAT OPERATION THEY'RE USING

// CALL THE APPROPRIATE FUNCTION
switch (operation){
    case '+':
        add(num1,num2);
        break;
    case '-':
        subtract(num1,num2);
        break;
    case '*':
        multiply(num1,num2);
        break;
    case '/':
        divide(num1, num2);
        break;
    default:
        alert('Invalid operation was entered. Try Again.');
}
}while(operation!=='+'&& operation!== '-' && operation!== '*' && operation !== '/') 

