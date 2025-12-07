console.log("i")

function repeatStringNumTimes(str, num){
  
  if(num<=0){
    return "";
  }
  let result = "";

    for(let i=0; i<num; i++){
      result = result+str;
      console.log(result)
    }return result
    
  }
  

repeatStringNumTimes("abc", 3);