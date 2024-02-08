
function callMethod() {
    console.log(this.name, "" ,this.like);
}

const obj={
    name:"uttam with code",
    like: "I am like solve problem"
}

callMethod.call(obj) // we are using call() method to invoke a function and specifying the this value

// Why
// When we call (callMethod), the value of this will be bound to object (obj),
// even when callMethod in not a method of obj


let name = {
    firstname:"Uttam",
    lastname: "Sharma",
   
}

let printFullName = function(hometown,state) {
    console.log(this.firstname+ " " + this.lastname + " from " +  hometown + " " + state);
}
printFullName.call(name , "Jaipur", "Rajasthan"); // how to invoke in this function 
// Each and every function in javasript has access a this keyword.
/* in this function that this keyword with to the name object over here 
this.firstname + " " + this.lastname
this refer to the name object */

let  name2 = {
    firstname:"sachin",
    lastname:"Tendulkar",
    // printFullName() {
    //     console.log(this.firstname+ " " + this.lastname);    /* this is not good so that way come in call() method
    // }
}

// function borrowing 
// become borrow from function other objects and user the data of some other object 
 
/*  Function.call(thisArg: any, ...argArray: any[]): any
The object to be used as the current object.
// Calls a method of an object, substituting another object for the current object. 
*/
printFullName.call(name2,"Mumbai", " Maharashtra");


// Only different between call() and apply () method is the way of passing arguments
/* apply(thisArg: any, argArray?: any): any
The object to be used as the this object.
Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
*/
printFullName.apply(name2,["Mumbai","Maharashtra"]) 

// in apply method as a second argument in a array


// Bind Method

// Bind method as similar as call method but only differecne between is instace of directly call method over here bind ()
// method bind the printFullName  with a object and return copy of that method 

let printMyName = printFullName.bind(name2,"Mumbai","Maharashtra")
console.log(printMyName);
printMyName();

// bind method does not invoked method give a copy of same method which call be invoke alter