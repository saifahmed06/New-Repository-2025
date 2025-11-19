let input = prompt("what would you like to do?");
const todos = ["collect chicken eggs", 'wash clothes'];
while(input!== 'quit' && input !='q'){
    if(input==='list'){
        console.log('****************')
        for(let i=0; i<todos.length;i++ ){
            console.log(`${i}: ${todos[i]}`)
        console.log('****************')
        }
    } else if(input==='new'){
        const newTOdo = prompt('on, what is the new todo?');
    }
    input= prompt("What would you like to do?")
}
console.log("Ok, Quit the app!")