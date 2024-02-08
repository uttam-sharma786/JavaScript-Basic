"use strict"



function callMethod() {
    console.log(this.name, this.like);
}

const obj = {
    name:"uttam",
    like:"I like a coding"
}

callMethod.call(obj)

// ==============================
