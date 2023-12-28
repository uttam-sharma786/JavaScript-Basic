// Generate Random Numbers Between two numbers

function getRand(max,min) {
    console.log(Math.random() * (max-min) +min);
}

getRand(5,2)

// Generate Random Integer Between Two numbers

function getRand_1(max,min) {
    console.log(Math.floor(Math.random() * (max-min))+min);
}

getRand_1(10,2)

// Generate Integer between Two Numbers (inclusive)
// To generate random numbers between two numbers and including both the min and the max number 
function getRand_2(max,min) {
    console.log(Math.floor(Math.random() * (max+1 -min)) +min);
}

getRand_2(10,2)