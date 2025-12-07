//JavaScript Program to Find the Factorial of a Number

/*
The factorial of a number is the product of all the numbers from 1 to that number. For example,

factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120


const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number: "));
if (num < 0) {
    console.log("Enter a valid number")
}

//if number is 0
else if(num === 0){
    console.log("1");
}else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i; //fact = fact *i
    }
    console.log(`The factorial of the ${num} is ${fact}`)
}
*/

//practise

const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number to find it's factorial: "));
if(num<0){
    console.log("Enter a valid number next time")
}else if(num===0){
    console.log(`Factorial of ${num} is 1`)
}else{
    let fact = 1;
    for(let i =1; i<=num; i++){
        fact *=i; //fact = fact*i
        console.log(`Factorial of ${num} is ${fact}`)
    }

}

