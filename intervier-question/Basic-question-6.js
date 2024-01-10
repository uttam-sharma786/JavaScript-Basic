// Function Hosting
/*
suppose how variables are hosted on top of out code before our code executed
how our code is first initialized, and then it's executed 

Hosting is a two step process, First, it initializes the complete code.
it's gonna initialize the global scope, then it's come to the local scope and
then it's going to initialize the local scope as well and when it initialize the local 
scope , 
*/
function functionName() {
    console.log("workattech");
}
functionName()


console.log(x);  // output is undefined beacuse of hosting
 
var x = 5

var x = 21;

var fun = function() {
    console.log(x);
    var x = 20;
};

fun()