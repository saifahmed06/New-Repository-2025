function swap(num1, num2){  //num =5, num2=10
    console.log(`Before swapping: ${num1}, ${num2}`)
    let temp; //temp = emplty value
    temp =num1; //temp=5
    num1=num2 //num1=10
    num2=temp //num2=5
    console.log(`After swapping: ${num1},${num2}`)
}
swap(5,10)