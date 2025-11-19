// //fibonacci numbers = 0 1 1 2 3 5
// function fibonacci(range) {
//     let firstTerm = 0;
//     let secondTerm = 1;
//     console.log(firstTerm);
//     console.log(secondTerm);
//     let nextTerm = firstTerm + secondTerm
//     while (nextTerm <= range) {
//         console.log(nextTerm)
//         firstTerm = secondTerm;
//         secondTerm = nextTerm;
//         nextTerm = firstTerm + secondTerm
//     }
// }
// fibonacci(20)

//using recursion method


// Fibonacci Numbers = 0 1 1 2 3 5...

function fibo(num){
    if(num==0){
        return 0 // 0
    }else if(num==1){
        return 1 // 1
    }
    return fibo(num-1)+fibo(num-2) // fibo(1) + fibo(0) = 1 + 0 = 1 
    // fibo(2) + fibo(1) = 1+1 = 2
    // fibo(3) + fibo(2) = 2+1 = 3
    // fibo(4) + fibo(3) = 3 + 2 = 5
}


let range = 20
for(let i = 0; i<=range;i++){ // 0<=20 | 1<=20 | 2<=20 | 3<=20 | 4<=20 | 5<=20 ....... | 20<=20
    console.log(fibo(i)) // fibo(0) | fibo(1) | fibo(2) | fibo(3)
}