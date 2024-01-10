// Spread vs Rest parameter

function mul (num1,num2) {
    console.log(num1 * num2); 
}

var arr = [5,6];
mul(...arr) // if we are using here this is called spread operator


function add(...num){ // ie we using this operator here , this is called rest operator
    console.log(num);
}
var arr= [4,8];
add(...arr);

// this code return error because rest parameter must be last formal parameter
// const fn = (a, ...numbers ,x,y) => {
//     console.log(x,y);
// };
// fn(5,6,8)

const fn = (a,x,y, ...number) =>{
    console.log(x,y,number);
};
fn(5,6,7,89,20)