// for doing one operato we use this method //
/*const add = (x, y)=>{
    return(x + y);
}
const name = "Ramachari";

module.exports = add;*/

// for doing multiple operations in same time we use this method //
const add = (a, b)=>{
    return(a + b);
}
const sub = (a, b)=>{
    return(a - b);
}
const mult = (a, b)=>{
    return(a * b);
}
const name = "Ramachari";

//module.exports.add = add;
//module.exports.sub = sub;
//module.exports.mult = mult;
//module.exports.name = name;

module.exports = {add, sub, mult, name};
