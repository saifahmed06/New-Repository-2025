let num1 = parseInt(prompt("Enter the number"));
let num2 = parseInt(prompt("Enter the number"));

while (isNaN(num1) || isNaN(num2)) {
     num1 = parseInt(prompt("Enter the number"));
     num2 = parseInt(prompt("Enter the number"));
} console.log(num1 + num2)