## What is method in javaScript

## Introduction
Sometime we need to perform same operation agian and agian and we need to write the same code many times.
To prevent the rewriting of the same code in our program.
We can use function and methods
## NOte:
Method are the set of codes that perform some specific tasks and return some value. 
It works on the properties of the project. 
Some method are bulit-in methods and some we need to create according to our use.

# objects in javascrit are defined as the instance of a class. 
# It is also referred to as a piece of code the represents the member of its class or variables of its class. 
## Methods are also defined as a property of an object.
### Various features of Methods
1. We can also call a method without using parenthesis
2. Methods can also take arguments as a parameter
3. Mehtod allow us to perform various type of actions on objects of the program

## Syntax
object = {
    methodName: function() {
        //code Part

    }
};

object.methodName()

## Example
let employee = {
    empName: "Uttam",
    department: "is Business Developer"
    details: function () {
        return this.empName + " developemnt in the department" + this.department;
    }
};
console.log(employee.details()); // output : Uttam is Business Developer


## Chaining Method

It is the concept that is used to make our code simple and easy. 
We can call a method on another method of the same object
# We can use this keyword  in the object's class to acess its methods

const my_object = new MyClass()
my_object.method_1(
    my_object.method_2(
        my_object.method_3(

        )
    )
)

## How to add method to an object 
An object is defined as an entity having some properties.
This property of the object can be many thing such as a variable, or some methods. 
This method will defined how th object will function in the javascript

## syntax : functionName.protptype.newMethodName = function() {}
## or : functonName.prototype.newMethodName = function(parameter_1, parameter_2,.. parameter_N) {}

## ex:
// object creation
let employee = {} ;
 // adding property
 employee.name = "Uttam";

 // adding method 
 employee.greet = function() {
    console.log('good morning)
 }
 // accessing a method
 employee.greet( ) // output : good morning

 ## Number of Built-in Methods are available in javascript
 Date()
 Date.now()
 Math.round(num)
 string.length()
 string.toLowerCase()
 Array.length()
 Math.floor()
 array.push ()
 ## many more ....

 ## Method
 1. A method in javascript is defined as a property of an object that has some function value
 2. It operates on the data which are contained inside a class
 3. A method of javascript is associated with the property of the object
 4. A javascript method can be called by the name of its object. we can use dot notation or square bracket notation
