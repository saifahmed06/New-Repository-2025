// let count = 0;
// while (count < 10){
//     console.log(count)
//     count++;
// }

// let count = 0;
// while (count < 10){
//        count++;
//     console.log(count)
 
// }

// const secret = 'Babyhippo';
// let guess = prompt("Enter the secret code...");
// while( guess!== secret){
//     guess = prompt("Enter the secret code...")
// }
// console.log("Congrats, your guess is correct")


//game - PROJECT

let maximum = parseInt(prompt("Enter the maximum number!"))

while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum =  Math.floor(Math.random()*maximum) +1;
console.log(targetNum);

let guess = parseInt(prompt("Enter a first guess!"));
let attempts=1;
while(parseInt(guess)!==targetNum){
    if(guess==='q') break;
    attempts++;
    if(guess>targetNum){
        guess = prompt("Toohigh! Enter a new guess:");
    } else{
     guess = prompt("Too low! Enter a new guess:");
    }
}
if(guess === 'q'){
    console.log("Ok, You Quit!")
}else{
    console.log("Congrats You Win!")
console.log(`You got it! It took you ${attempts} attempts`)
}
