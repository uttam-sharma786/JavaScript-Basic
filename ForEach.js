// This is chaining 
let nums = [1,33,44,55];
//TypeError: Cannot read properties of undefined (reading 'filter')
const mapResult = nums.forEach((element) => {
    return element+2;
})
.filter((element) => {
    return element > 3;
});
console.log(mapResult) ; //output [35,46,57]

/* one more example */

let myArray = [1,2,3,4];

try {
    const chainedResult = myArray.forEach((element) => {
        return element;
    })
    .reverse();
    console.log(chainedResult);
} catch(error) {
    console.log(`Error :${error.message}`);
}
console.log(myArray);