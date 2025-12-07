function decode(str){
    const base64Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

    while(str.endsWith("=")){
        str = str.slice(0,-1)
    }

    let binary = ""
    for(let ch of str){
        const index = base64Char.indexOf(ch)
        binary+=index.toString(2).padStart(6,"0")
    }

    let result = ""

    for(let i = 0; i<binary.length;i+=8){
        const byte = binary.slice(i,i+8)
        const charCode = parseInt(byte,2)
        result+=String.fromCharCode(charCode)
    }

    console.log(result)
}

decode("TUFO")

pa