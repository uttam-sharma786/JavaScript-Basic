// What is IIFE
/* IIFE mean (immediately invoked function expressions) 
*/

// function add(num) {
//     return num+num;
// }
// add(5);
// console.log(add(5));

(function add(num){
    console.log(num+num);
})(5);

(function(x){
    return (function (y) {
        console.log(x); // 1
    })(2);
})(1);

/*
X in this inner scope first and when it doesn't find this x over here, It's going
to search in its parent's scope and if x is exist in parent scrop , because of closure
*/