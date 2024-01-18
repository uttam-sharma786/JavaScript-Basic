// what is first class funciton 
// We can pass them inside of another function just like a variable
// and We can also manipulate and return them from the function 

function square(num) {
    return num*num
};


function displaySquare(fn) {
    console.log("Square is" + fn(5));
}
displaySquare(square)