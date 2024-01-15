// Closures in JavaScript
// Write a funciton that would allow you to do this


function createBase(num) {
    return function(innerNUm){
        return innerNUm+num;
    }
}
var addSix = createBase(6);
console.log(addSix(10)); 
console.log(addSix(21));