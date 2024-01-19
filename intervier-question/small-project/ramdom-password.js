// Random String Generator in JavaScript


function generateRandomString(length) {
    const charset = "AQWERTYUIOPSDFGHJKLMNBVCXZ#$@%";
    let result = "";
    for(let i=0;i<=length;i++){
    const randomIndex = Math.floor(Math.random()* charset.length);
    result += charset[randomIndex];
    
    };
    return result;
    
}
const randomString = generateRandomString(4);
console.log(randomString);