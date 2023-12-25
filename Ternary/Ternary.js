
const age = 19;
console.log((age >18)? "Eligible" :"Not ELigible");


function getName (name) {
    return name? name: "No argument was passed"
}

console.log(getName("Mark"));
console.log(getName());