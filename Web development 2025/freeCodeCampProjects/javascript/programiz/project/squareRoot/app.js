const input = document.getElementById("input");
const calculateBtn = document.getElementById("calculateBtn");
const resultDisplay = document.getElementById("result");

//add click event to button

calculateBtn.addEventListener("click", function () {
    event.preventDefault();

    const num = parseFloat(input.value);

    //check for valid input

    if (isNaN(num)) {
        resultDisplay.textContent = "Enter a valid number:"
        return;
    }

    //calculate square root
    const sqrtValue = Math.sqrt(num)

    //show result in DOM
    if (Number.isInteger(sqrtValue)) {
        resultDisplay.textContent = sqrtValue;
    } else {
        resultDisplay.textContent = sqrtValue.toFixed(2);
    }
})


