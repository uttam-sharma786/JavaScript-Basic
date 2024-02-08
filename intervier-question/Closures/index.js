/* setTimeout , javascript does not wait for anymore 
serTimeout do is it takes this callback function and stores it into some place */

// function x() {
//     var i =1;
//     setTimeout( function () {
//         console.log(i);
//     },3000);
//     console.log("uttam sharma");                    
// }
// x();

// let is a block scrop 
/* It means for each and every loop iteration and each time set timeout
 is run this callback function has a new copy of i  bound to it
  which value has 2 and so on 
Each and every time this function reference is called it is referring to different memory location which 
is their individual  i separate copy of i which were  in the scope */

// let is block scope and it create a new copy every time this loop is executed

function y() {
    for(let i =1;i<=5; i++){
        setTimeout(function () {
            console.log(i);
       
        },i*1000);

    }
    console.log("Namaste Uttam");
    
}
y();


function x() {
    for(var i=0;i<=5;i++){
        function close(y) {
            setTimeout( function () {
                console.log(i);
            },3000);
             close(y)
    
        }
        console.log("Namaste Javascript");
    }
   
                       
}
x();

        