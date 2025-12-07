//Javascript Program to Check if a Number is Odd or Even
const prompt = require("prompt-sync")();



let number = prompt("Enter your number");

// if(number%2==0){
//     console.log(`${number} is even`)
// }else{
//     console.log(`${number} is odd`)
// }


//USING ternary operator
const result = (number % 2==0)?"even": "odd";
//display the result
console.log(`The number is ${result}`)

