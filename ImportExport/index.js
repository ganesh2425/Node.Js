/* for doing one operato we use this method //
const add = require("./event");
console.log(add(10, 15));

//console.log(add);*/

// for doing multiple operations in same time we use this method // 
const {add, sub, mult, name} = require("./event")
console.log(add(10, 5));
console.log(sub(100, 10));
console.log(mult(10, 6));
console.log(name);



