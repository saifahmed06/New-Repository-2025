//Javascript Program to Generate a Random Number
/*
In JavaScript, you can generate a random number with the Math.random() function.

Math.random() returns a random floating-point number ranging from 0 to less than 1 (inclusive of 0 and exclusive of 1)
*/

//generating a random number
// const a = Math.random();
// console.log(a)

/*
We can use this value in the range (0,1) to find the random value between any two numbers using formula:

Math.random() * (highestNumber - lowestNumber) + lowestNumber
Example 2: Get a Random Number between 1 and 10
*/
const a =Math.random()*(10-1)+1
console.log(`Random number between 1-10 is ${a}`)

/*
All the above examples give floating-point random numbers.

You can use Math.floor() to get a random integer value. Math.floor() returns the number by decreasing the value to the nearest integer value. For example,

Math.floor(5.389); // 5
Math.floor(5.9); // 5
The syntax to find the random integer value between two numbers:

Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber
*/
const b = Math.floor(Math.random()*(20-10)+10);

console.log(`Random number between 1-10 is ${b}`)

//from 0-10
const c =Math.floor(Math.random()*(10))
console.log(`Random number between 0-10 is ${c}`)