let multiply = function(x,y) {
    console.log(x*y);
}

// here bind is essential create a  copy of this  multiply method and parse an arguments
let multiplyByTwo = multiply.bind(this, 2);
