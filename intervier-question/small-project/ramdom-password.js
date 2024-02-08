// Random String Generator in JavaScript
// Password Generator, Token generation, Data Simulation, Usernames and display Names, File or Folder Naming, Session identifiers, Coupon Codes, Captcha,
// Database Records, Unique URL, 

// Define a character set containing all possible characters for the random string
// Generate random indices within range of the character set
// Concatenate the selected characters to form the random string 

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
