// common knowledge
//  ReferenceError: username is not defined

/*
we know that out of scope we can't call
*/ 
// function outside(){
//     let username="Ram";
    
// }
// console.log(username);


// Lexical Scoping
function outer() {
    let name=  "uttam"
    function inner() {
        const secretKey = "U123"
        console.log("inner function and inside variable " ,name , secretKey);
        
    }

    function innerTwo() {
        // if we want to call secrekey here, we can't call here
        console.log("too close", name);
        // console.log("secretkey", secretKey);

    }
    
    inner()
    innerTwo()  // if we not use () it means just reference that why we use () for call purpose
}
console.log("Too outer",name);
outer()

function init(){   //local variable
    var name = "google";
    function display(){   //inner function
        console.log(name);   // no local variables of its own
    }
    display();
}
init()

/* 
lexical scoping, which describes how a parser resolves variable names when functions are nested. 
The word lexical refers to the fact that lexical scoping uses the location 
where a variable is declared within the source code to determine where that variable is available. 
Nested functions have access to variables declared in their outer scope.
In this particular example, the scope is called a function scope, 
because the variable is accessible and only accessible within the function body where it's declared.
*/

// This code give error; ReferenceError: x  is not defined
// function checkValue() {

//     if(Math.random()>0.5){
//         const x = 1;
//     } else {
//         const x = 2
//     }
//     console.log(x);
    
// }
// checkValue()

// Lexical Scoping end here

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++
This is clouser
*/

//the displayName() inner function is returned from the outer function before being executed.
// A closure is the combination of a function and the lexical environment within which that function was declared.
// This environment consists of any local variables that were in-scope at the time the closure was created
//  In this case, Func is a reference to the instance of the function displayName that is created when makeFunc is run
// The instance of displayName maintains a reference to its lexical environment, within which the variable name exists
// For this reason, when myFunc is invoked, the variable name remains available for use, and "Microsoft Edge" is passed to console.log.
function makefunc() {
    const name = "Microsoft Edge";    // inner function have access of outer function and scope
    function dispalyName(){
        console.log(name);
    }
    return dispalyName; //note here execation context scope( Lexical scoping)
}
const func = makefunc();
console.log(func);


// one of above , example of clouser 

function makeAdd(x){  // declare function , take a single argument x
    return function(y){  // return a new function, it returns take a single argu y
        return x+y;  // returns the sum of x and y 
    };
}
const add5 = makeAdd(5);  // add5 and add10 both from closures
// They share the same function body 
// Different lexical environments
const add10 = makeAdd(10);

console.log(add5(2));
console.log(add10(5));


document.getElementById("yellow").onclick = clickHandler("yellow")
document.getElementById("green").onclick = clickHandler("green");

function clickHandler(color) {

        //document.body.style.backgroundColor = `${color}` it is not working that why we use closure
    return function(){
        document.body.style.backgroundColor = `${color}`; 
    }
   
}

