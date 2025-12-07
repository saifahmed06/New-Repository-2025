//JavaScript Program to Print All Prime Numbers in an Interval
const prompt = require("prompt-sync")();

const lowerNumber = parseInt(prompt("Enter lower number: "))
const HigherNum = parseInt(prompt("Enter higher number: "))

console.log(`THe prime numbers between ${lowerNumber} and ${HigherNum} are: `);

// //looping from lower num to higher 
// for( let i = lowerNumber; i<=HigherNum; i++){
//     let flag =0;
// //looping through 2 to user input number
// for(let j=2; j<i; j++){
//     if(i%j==0){
//         flag =1;
//         break;
//     }
// }
// //if number greater than 1 and not divisible by other numbers
// if(i>1 && flag ==0){
//     console.log(i)
// }
// }

for (let i = lowerNumber; i <=HigherNum; i++) {
   let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i)
    }
}