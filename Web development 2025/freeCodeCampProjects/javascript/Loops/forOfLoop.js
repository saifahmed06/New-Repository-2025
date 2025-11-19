let arr =[ ['CR7', 'Dhoni'] , ['Messi','Neymar jr'],['Khabib', 'ISLAM']]

// for(let i=0; i<arr.length; i++){
//     console.log(`Players names are ${arr[i]}`)
// }

//for of
// for(let players of arr){
//     console.log(`Players names are ${players}`)
// }



// //FOR LOOP
// for(let i=0; i<arr.length;i++){
//     const row = arr[i];
//     for(let j=0; j<row.length;j++){
//         console.log(row[j])
//     }
// }

// // SAME CODE USING "FOR OF LOOP"
// for (let row of arr){
//     for(let players of row){
//         console.log(players);
//     }
// }


// for(let char of "hello world" ){
//     console.log(char)
// }


// Practice exercise
// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

// for(let list of numbers){

//     console.log(list*list)
// }


const testscores ={
    saif: 100,
    zeeshan: 90,
    kaif: 20,
    // shayan: 10
}

// for(let person in testscores){
//     console.log(person, 'scored:', testscores[person])
//    // console.log(`${person} scored ${testscores[person]}`)
// }
 

// console.log(Object.keys(testscores), Object.values(testscores))
// console.log(Object.entries(testscores))


// sum total values

// let total = 0;
// for(let score of Object.values(testscores)){
//     total +=score;  
// }
// console.log(total)


//Average of total values

let total = 0;
let scores = Object.values(testscores);
for(let score of scores){
    total+=score
}
console.log(total/scores.length)
console.log(scores.length)