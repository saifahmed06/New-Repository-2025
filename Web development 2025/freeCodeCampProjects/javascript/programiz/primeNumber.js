// function primeOrNot(number){
//     if(number<=1) return false;
//     if(number ===2) return false;
//     if(number%2===0) return false;
//     //check the odd numbers up to root of the number

//     for(let i=3; i<=Math.sqrt(number); i+2){
//         if(number%i ===0){
//             return false;
//         }
//     }
//     return true;
// }

// //test

// let num = parseInt(prompt("Enter a number:"));
// if(primeOrNot(num)){
//     console.log(`${num} is a prime number`)
// }else{
//     console.log(`${num} not a prime number`);
// }


function prime(low, max) {

    for (let i = low; i <= max; i++) {
        let isPrime = true
        for (let j = 2; j <=i/2; j++) {
            if (i % j === 0) {

                isPrime = false
                break;

            }
        }

        if (isPrime == true && i > 1) {
            console.log(i)
        }
    }
}
prime(1, 20)