// Funtion Scope - O/P Based question

for (let i = 0; i<5; i++) {
    setTimeout(function () {
        console.log(i);
    },i*1000);
}

// it has a delay of 1000 milliseconds, what do you think the output is going to be?
// Everytime this for loops runs, it creates another block scope for this function 
// when we use (var )  outpue five time(5), because doesn't have a block scope