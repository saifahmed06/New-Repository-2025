//JavaScript Program to Check Prime Number
//A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number: "));
let isPrime = true;

//check if the number i greater than 1?
if (num === 1) {
    console, log(" given number is neither prime or composite")
}

//check if the number is greater than 1?
if (num > 1) {
    //looping through 2 to num/2  {num/2 is because no number greater than n/2 can divide the number except itself}
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is not a prime number`)
    }
}