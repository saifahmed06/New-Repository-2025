//JavaScript Program to Print the Fibonacci Sequence

const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number: "));
let n1=0, n2= 1, nextTerm;
console.log("Fibonacci series");
for(let i =1; i<=num; i++){
    console.log(n1); //print 0 // prints 1// prints 1// prints = 2// prints = 3// prints 5
    nextTerm = n1+n2; // nextTerm becomes 0+1 = 1// nextTerm = 1+1 =2// nextTerm = 1+2=3// nextTerm = 2+3 = 5// nextTerm= 3+5=8//NextTerm = 5+8 = 13//
    n1=n2; // n1=0 becomes n1=1// n1 = 1// n1= 2// n1 = 3//n1 = 5// n1 = 8
    n2 = nextTerm; //n2=1 becomes n2=1// n2 = 2// n2= 3// n2 = 5// n2 = 8// n2 = 13
}