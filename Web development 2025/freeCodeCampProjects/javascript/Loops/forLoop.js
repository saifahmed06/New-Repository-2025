/*
//write numbers from 1 to 10
for(let i=1; i<=10; i++){
    console.log(i)
}

for(let i =1; i<=6;i++){
    console.log("Da ba dee da ba daa")
}


for(let i =0; i<=20;i+=2){

    console.log(i)
   
}
*/
// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0

// for(let i=25; i>=0; i-=5){
//     console.log(i)
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for(let i=0; i<people.length; i++){
//     console.log(people[i].toUpperCase());
// }

//Nested loops

// for(let i=1; i<=10; i++){
//     console.log(`i is: ${i}`)
//     for(j=1; j<4;j++){
//         console.log(`j is: ${j}`)
//     }
// }

const seatingCHart = [
    ['saif', 'kaif', 'zaid'],
    ['Peter', "Lucy", 'Lily'],
    ['ROcky', 'doggy', 'catty']
]

for (let i=0; i< seatingCHart.length; i++){
    const row = seatingCHart[i];
    console.log(`Row #:${i+1}`);
    for(let j=0; j<row.length; j++){
        console.log(row[j])
    }
}