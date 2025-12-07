//JavaScript Program to Find the Largest Among Three Numbers
const prompt = require("prompt-sync")();

let input1 = prompt("enter input 1: ");
let input2 = prompt("enter input 2: ");
let input3 = prompt("enter input 3: ");

if (input1 >= input2 && input1 >= input3) {
    console.log("Input 1 is the greatest among the given 3 numbers")
} else if(input2 >= input1 && input2 >= input3) {
    console.log("Input 2 is the greatest among the given 3 numbers");
}else{
    console.log(`input 3 is the greatest`)
}

