const input = document.getElementById("input");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result")



calculateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const num = parseFloat(input.value);

    if (isNaN(num)) {
        resultDisplay.textContent = "Enter a valid number: "
        return;
    }

    //logic calculation
    if (num <= 1) {
        result.textContent = num + " is not a prime number";
        return;
    }

    if (num == 2) {
        result.textContent = num + " Not a prime number";
        return;
    }
    if (num % 2 == 0) {
        result.textContent = num + " Not a prime number";
        return;
    }

    let isPrime = true;
    for (i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.textContent = num + " is a prime number";
    } else {
        result.textContent = num + " is not a prime";
    }
});