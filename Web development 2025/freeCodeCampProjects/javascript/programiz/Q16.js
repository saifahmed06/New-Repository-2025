//JavaScript Program to Display the Multiplication Table
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number :"));
if(num<=0){
console.log("Invalid number");
}else{
    for(let i =1; i<=10; i++){
        num == num*i;
        console.log(`${num} x ${i} = ${num*i} `)
    }
}