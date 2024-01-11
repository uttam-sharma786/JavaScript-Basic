// Arrow functions vs Regular Function

//1 diff based on syntax
let square = function(num) {
    return num*num
};
console.log(square(5));

//2 - implicit "return" keyword
square = (num) => num*num
console.log(square(6));

// - arguments
function fn() {
    console.log(arguments);
}
fn(4,5,6)

// let's see inside arrow function
// this is throw error / like arguments is not defined
// const fnArr = () => {
//     console.log(arguments);
// }
// fnt(5,6,7);

// THis keyword
// The first arrow function gives a subscribe to an undefined, but the second regular function gives the scubscibe to Uttam Sharma
// It's here is pointing to this object 
// instead of arrow function is pointing to the global object
let user = {
    userName: "Uttam Sharma",
    rc1: () => {
        console.log("Subscibe to" + this.userName);
    },
    rc2 () {
        console.log("Subscibe to" + " " + this.userName);
    },
};

user.rc1(); // Subscibe to undefined
user.rc2(); // 

// How the constructor is defined inside of both of these