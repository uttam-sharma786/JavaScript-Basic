## Overview 
1. Var
2. let 
3. const 

# Variable Declaration
var myName;

# Variable Initialization
myName = "my name"
console.log(myName) #output => "my name"

## Function-scope vs Block-scope

# Scope
Scope stands for where our variable will be available to use inside our code and where it will not

ex:
function myFun() {
    var myName = "my name"
    console.log(myName);
}

myFun();  //output => "my name" 
console.log(myName); // output => RefereceError

explaination: , A function myFun();inside function, we declare a variable myName and myName successfully prints the value of myName on the console.
but We try to print the variable myName outside the function, it throws referenceError because variable myName has a function scope that's why it's not accessible outside the function

## Function Scope

Variable having Function-scope means variable will only be available to use inside the function it declared, will not be accessible outside of function, otherwise wil give ReferenceError

Ex:
function name(){
    var myAge = 29;
    console.log(myAge);
}
name() // output => 22

console.log(myAge); //output => RegerenceError

## Expalination
1. We create a function name()
2. We declare a variable and assign value inside the function
3. Then we call the function, it prints the myAge variable on the console.

## However, When we try to access the varibale outside the function, it's throwing a Reference Error

## Blcok-Scope

Block means a pair of curly brackets, a block can be anything that contains and closing curly bracket
variable having block-scope will only be available to use inside the block it declared ,will not be accessible outside the block, and will give Reference Error if we try to access

if(true) {
    let myName = "your name";
    console.log(myName); // output=> "Your name"

}

console.log(myName); // output => ReferenceError



# var
1. var has the function or global scope
2. It gets hoiested to the top of its scope and initialized
3. It can be update or re-declared
4. Can be decalred without initiazation
5. Can be accessed without initializations as its default value is "undefined"

# let
1. Let's have the block scope
2. It get hoiested to the top of its scope but didn't initialize
3. It can be updated and can't be re-declared
4. Can be decalred without initiazation
5. Cannot be accessed without initialization, leading to 'referenceError'

# const
1. Const variable has the block scope
2. It get hoiested to the top of its scope but didn't initialize
3. It can't be updated or re-declared
4. Cannot be declared without initialization
5. Cannot be accessed without initialization, as it cannot be decalred without initialization in the first place

# What is the Var Variable
# Global scope of decalation

var myName = "your name";

function myFun() {
    console.log(myName);
}

myFun(); //output => "your name"


if(ture {
    console.log(myName); output => "your name"
})

console.log(myName); //output => "your name"

# We have declared global variable because which is declared outsite the body th function
# We tried to access this variable inside our function myFun, it print's the variable into the console.
## We can access everywhere inside or outside our program because it has global scope

## Hosistig of var variable

When we declare a var variable, it gets hoisted to the top of the scope and gets assinged the valueof
undefined,

# ex
console.log(myName); //output => undefined
var myName = "my name";

# we are trying to access the variable myName before the declaration

## when it will look like when the variable myName get hoisted to the top of the scope
var myName;
console.log(myName); //output => undefined
myName = "my name";

See our variable gets hosited to the top of the scope and initialized with underfined, but the initalization of the value 
happens where the variable was declared

Hoisting mean's which moves variables and function to the top of scope before code execution, it also happens when we create a function declarations

Ex:
myFun() //output => "my name"

function myFun() {
    var myName = "my Name"
    console.log(myName);

}

In above metation code , We are calling the function before the declaration,but still, it callls the function successfully

## Problem with the var Variable

*** Var variable can be re-declared and updated, re-declaration allows declaring more than one variable with the same name, because of reason, it we declare a new variable by mistake, it will override the original variable value

Ex :
var name = "my name"
var myAge = 22;

if(myAge > 18) {
    var name = "another person name"
}

console.log(name); //output => "another person name"


# what is the let variable

# let myName = "my name";

we used let varibale, initialize a string value

## We can't re-declatation (let variable)

# Let variable has block scope, meaning let variable will be accessible only inside the block.

Ex:
let myAge = 20;
if(myAge > 18) {
    let myName = "my name" 
    console.log(myName) //output => "my name"
}
console.log(myName); //output => ReferenceError

## Let variable didn't allow re-declaration of the variable

## but it allowd us to update the variable

Ex :
let myName = "my name"
myName = "my new name";
console.log(myName); //output => "my new name"

We declare a variable myName and assign the value of "my name", then, in the next line , we assign another value
to our myName variable, which is "my new name", it prints the updated value of the myName variable.

## hosting of let variable

let variable also get hosited to the top of the scope but does not assigned any value, as a result, 
If access the let variable before declaration if will throw a syntax error because it doesn't have any value to print.

ex:
console.log(myName); //output => ReferenceError
let myName = " my name";

# We try to access a variable myName before the declaration but get ReferenceError after getting to the top the scope  variable remains uninitialized