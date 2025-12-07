function encode(str){
// Step 1: Convert to 8-bit binary
let binary = str.split("").map(ch =>
    ch.charCodeAt(0).toString(2).padStart(8, "0")
).join("")
console.log(binary)

//step 2: Split into 6-bits group
let newArr = [];

for(let i =0; i<binary.length; i= i+6){
    newArr.push(binary.slice(i, i+6))
}
console.log(newArr)

newArr = newArr.map(bits =>{
    if(bits.length<6){
        return bits.padEnd(6, "0")
    }else{
        return bits;
    }
})

const Base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

//step 4: convert each 6 bit to base64 char

let encodingString = "";
newArr.forEach(bits=>{
    const number = parseInt(bits, 2);
    encodingString = encodingString+Base64[number];
    
});
let remainder = str.length%3;
if(remainder===1){
    encodingString= encodingString+ "==";
}else if(remainder===2){
    encodingString = encodingString+"=";
}
console.log(encodingString)


}

encode("Saif")

