## Difference between forEach() and map() loops

# Both methods using for iterating through arrays, both are used to traverse arrays
# Both methods take a callback function as an argument

## Difference between map and forEach lies in their return values

## Map method returns a new array form a existing array, after applying the callback function to each element of the existing array.

## Ex
let nums = [1,33,44,55];
const mapResult = nums.map((element) => {
    retrun element+2;
});
console.log(mapResult) 
## output [3,35,46,57]

## forEach method does not return anything. It is just used to iterate the element of an array

## ex
let nums = [1,33,44,55];
const forEachResult = nums.forEach((element) => {
    return element+2;
});
console.log(froEachResult);

## Map Vs ForEach

## chainig
## We can chain other array methods with the map method as it has a return value of an array

## Ex
let nums = [1,33,44,55];

const mapResult = nums.map((element) => {
    return element+2;
})
.filter((element) => {
    return element > 3;
});
console.log(mapResult) ; //output [35,46,57]

## Map vs forEach
## chaining does not possible with forEach method, as it does not return anything. Instead, chaining other array method 
## with forEach results in a TypeError.


## EX
let nums = [1,33,44,55];
## TypeError: cannot read property 'filter' of undefined
const mapResult = nums.map((element) => {
    return element+2;
})
.filter((element) => {
    return element > 3;
});
console.log(mapResult) ; //output [35,46,57]