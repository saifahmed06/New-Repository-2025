const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const calculateBtn = document.getElementById("calculateBtn");
const resultDsply = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
    event.preventDefault();
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const num3 = parseFloat(input3.value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultDsply.textContent = "Enter a valid number:"
        return;
    }
    //calculation

    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }


//show result
resultDsply.textContent = largest;
})







const resultDisplay = document.getElementById("result");