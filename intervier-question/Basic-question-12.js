//closures 
/* closure is a function that references variable in the outer scope from its inner scope. 

// Lexical scope
In lexical scope means that a variable defined outside a function can be accessible inside of another function defined 
after a variable declaration. But the opposide is not ture
*/
// here outside of this function can be accessible inside of this function . called lexical scope
var name = "Uttam Sharma"

//global scope
function local() {
    
    // local scope
    console.log(name);
  
    
}
local();

// global scope
function scubscibe() {

    var name1 = "Code with Sharma";
    // inner scope
    function displayName() {
        // inner scope
        alert(name1);
    }
    displayName();
}
scubscibe()