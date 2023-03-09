//STEP 1
function halfNumber(){
    let number = prompt('Enter a number');
    let result = number/2;
    console.log(`Half of ${number} is ${result}.`)
}

//STEP 2
function squareNumber(){
    let number = prompt('Enter a number');
    let result = number*number;
    console.log(`The result of squaring the number ${number} is ${result}.`)
}

//STEP 3
function percentOf(){
    let numOne = prompt('Enter a number');
    let numTwo = prompt('Enter a number');
    let result = ((numOne / numTwo)*100).toFixed(2);
    console.log(`${numOne} is ${result}% of ${numTwo}.`)
}

//STEP 4
function findModulus(){
    let numOne = prompt('Enter a number');
    let numTwo = prompt('Enter a number');
    let result = numOne % numTwo;
    console.log(`${result} is the modulus of ${numOne} and ${numTwo}.`)
}
//STEP 5

//halfNumber();
//squareNumber();
//percentOf();
//findModulus();