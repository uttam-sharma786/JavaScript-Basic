const numbers = [5,6,7,8,9]

const max = Math.max.apply(null,numbers);

console.log(max);


// in this case we can use implicitly "spread" an array an a series of arguments

const array = ["a","b"];
const element = [1,2,3,4];

array.push.apply(array,element);
console.info(array);

array.concat.apply(array,element);
console.info(array)