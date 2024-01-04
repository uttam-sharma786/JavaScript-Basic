function outer() {
    const name=  "uttam"
    function inner() {
        console.log({name});
    }
    console.log("hi");
    inner()
}
outer()

function init(){   //local variable
    var name = "google";
    function display(){   //inner function
        console.log(name);   // no local variables of its own
    }
    display()
}
init()

/* 
lexical scoping, which describes how a parser resolves variable names when functions are nested. The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

In this particular example, the scope is called a function scope, because the variable is accessible and only accessible within the function body where it's declared.
*/