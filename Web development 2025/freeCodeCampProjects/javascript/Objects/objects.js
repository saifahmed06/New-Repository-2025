// const person = {
//     firstname: 'Mohammed',
//     lastname: 'Ahmed'
// }

// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person)

// const product = {
//     name: "Gummy Bears",
//     inStock: true,
//     price: 1.99,
//     flavors: ["grape", "apple", "cherry"]
// }

// console.log(product.flavors[1])

// //PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:

const fullAddress = restaurant.address +" "+ restaurant.city +" "+ restaurant.state +" "+ restaurant.zipcode
console.log(fullAddress)
