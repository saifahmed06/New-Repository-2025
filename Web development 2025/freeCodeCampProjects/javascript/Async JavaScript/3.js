// WepAPIs & single threaded 
//JS is single threaded

// console.log("Hello everyone!")
// setTimeout(() =>{
//     console.log(" Here is your data from server")
// }, 3000)
// console.log("I am at the end of the file!")

/*
->Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)
->The JS call stack recognizes these Web API functions and passes them off to the browser to take care of
->Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.
*/

document.body.style.backgroundColor= "red"