// ArmStrong Numbers = 83 => Length of number = 2
                       // 8^2 + 3^2 == 64+ 9 = 73
                       // 8, No of digit = 1
                       // 8^1 = 8 8=8
                       // 153 = no of digits = 3
                       // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153  

function armStrong(num){ // num = 153
    let sum = 0, temp = num; // temp = 153 
    let noOfDigits = num.toString().length // noOfDigits = 3
    while(temp>0){ // while(153>0) (15>0) (1>0) (0>0)
        let remainder = temp%10 // 153 % 10 =  remainder = 3 // 15%10 = 5 // 1%10 = 1
        console.log(remainder)
        sum+= remainder ** noOfDigits // sum=  0+ 3**3= 0+ 27 = 27+5**3= 27 + 125= 152+1**3= 153 
        console.log(sum) // 27
        temp = parseInt(temp/10) 
        console.log(temp) // 153 // 15 // 1 // 0
    }
    if(sum==num){ // 153==153
        console.log(`${num} is an Armstrong number`)
    }else{
        console.log(`${num} is not an Armstrong number`)
    }
}

armStrong(12)

// 1^2 + 2^2 = 1+4 = 5



//Range code
// ArmStrong Numbers = 83 => Length of number = 2
                       // 8^2 + 3^2 == 64+ 9 = 73
                       // 8, No of digit = 1
                       // 8^1 = 8 8=8
                       // 153 = no of digits = 3
                       // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153  

function armStrong(low,max){ // num = 153
    for(let i = low; i<=max; i++){
        let sum = 0, temp = i; // temp = 153 
        let noOfDigits = i.toString().length // noOfDigits = 3
        while(temp>0){ // while(153>0) (15>0) (1>0) (0>0)
            let remainder = temp%10 // 153 % 10 =  remainder = 3 // 15%10 = 5 // 1%10 = 1
            sum+= remainder ** noOfDigits // sum=  0+ 3**3= 0+ 27 = 27+5**3= 27 + 125= 152+1**3= 153 
            temp = parseInt(temp/10) 
        }
        if(sum==i){ // 153==153
            console.log(i)
        }
    }
}

armStrong(1,500)

// 1^2 + 2^2 = 1+4 = 5