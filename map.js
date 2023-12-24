/* Chaining map() abd reverse() with a array return value */

let myArrayForMap = [1,2,3,4];

const chainedResultForMap = myArrayForMap.map((element) => {
    return element+7;
})
.filter((element) => {
    return element >3
})
.reverse()
console.log(chainedResultForMap);