/*
ARRAY METHODS
PUSH - ADD TO END
POP - REMOVE FROM END
SHIFT - REMOVE FROM START
UNSHIFT - ADD TO START
*/
/*
let arr = ["salman", "Saif", "saleem", "zahir", "samreen"]
console.log(arr)

arr.push('srk')
console.log(arr)

arr.pop('srk')
console.log(arr)

arr.shift('salman')
console.log(arr)

arr.unshift('saif')
console.log(arr)

//Exercise
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!
planets.shift('The Moon')
planets.push('Saturn')
planets.unshift('Mercury')
*/
/*
More methods
concat - merge arrays
includes - look for a value
indexOf - just like string.indexOf
join - creates a string from an array
reverse - reverses an array
slice - copes a portion on an array
splice - removes/replaces elements
sort - sort an array
*/
/*
concat - merge arrays
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

const merged  = arr1.concat(arr2)
console.log(merged)
*/
/*
//includes - look for a value

arr1 = [1,2,3,4]
console.log(arr1.includes(3)); //true
console.log(arr1.includes(12)); //false
*/


/*
//indexOf() → Find index of a value

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

console.log(planets.indexOf('Mars'))


//join - creates a string from an array

const intro = ['My','name', 'is', 'Saif'];
console.log(intro.join(" "))
console.log(intro.join("-"))


//reverse - reverses an array
const fruits = ['apple', 'banana', 'orange', 'grapes', 'papaya']
fruits.reverse();
console.log(fruits)



//slice - copes a portion on an array

const fruits = ['apple', 'banana', 'orange', 'grapes', 'papaya', 'watermelon']
const part = fruits.slice(2,5)
console.log(part)


//splice - removes/replaces elements

const arr = [1,2,3,4,5,6,7]
// Remove 2 elements starting from index 1
arr.splice(1,2);
console.log(arr)

// Add elements using splice
arr.splice(1,0, "s", "a");
console.log(arr)


//sort - sort an array



 */

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = 'Hugo'
console.log(airplaneSeats)