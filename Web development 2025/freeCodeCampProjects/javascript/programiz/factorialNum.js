// function factorial(num){
//     let x = 1;
//     for(let i =1; i<=num; i++){
//         x = x*i;
//     } return x;
// }
// console.log(factorial(0))





//using recurssion method

function factorial(num) {

    if (num == 0) { //if num is equal to 0 then go inside and return 5
        return 5;
    }
    return num * factorial(num - 1); // 5* factorial(4)

}

console.log(factorial(5)) // 5*4*3*2*1 = 120

