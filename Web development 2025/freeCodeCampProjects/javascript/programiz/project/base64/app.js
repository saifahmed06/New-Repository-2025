function encode(str) {
    // Step 1: Convert to 8-bit binary
    let bin = str.split("").map(ch =>
        ch.charCodeAt(0).toString(2).padStart(8, "0")
    ).join("");

    // Step 2: Split into 6-bit groups
    let newArr = [];
    for (let i = 0; i < bin.length; i += 6) {
        newArr.push(bin.slice(i, i + 6));
    }

    // Step 3: Pad the last group if needed
    newArr = newArr.map(bits => {
        if (bits.length < 6) {
            return bits.padEnd(6, "0");
        }
        return bits;
    });

    // Base64 table (64 characters)
    const base64Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // Step 4: Convert each 6-bit to Base64 char
    let encStr = "";
    newArr.forEach(bits => {
        const number = parseInt(bits, 2);  
        encStr += base64Char[number];
    });

    // Step 5: Add '=' padding based on input length % 3
    let remainder = str.length % 3;
    if (remainder === 1) encStr += "==";
    else if (remainder === 2) encStr += "=";

    console.log(encStr);
}
encode("Saif")