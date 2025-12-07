//JavaScript Program to Calculate the Area of a Triangle

//formula = area = (base * height) / 2

// const base = 4;
// const height = 6;

// //culculate the area
// const areaValue = (base*height/2);
// console.log(`The area of the triangle is ${areaValue}`)


//Example 2: Area When All Sides are Known
//If you know all the sides of a triangle, you can find the area using Herons' formula. If a, b and c are the three sides of a triangle, then
//s = (a+b+c)/2
//area = √(s(s-a)*(s-b)*(s-c))

const side1 = 4;
const side2 = 6;
const side3 = 8;

//calculate the semi-perimeter
const s = (side1+side2+side3)/2;
//calculate the area
const areaValue = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(`The area of the triangle is ${areaValue}`)

