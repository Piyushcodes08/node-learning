const colors = require("colors");
const add = require("./math");
const {ad , sub, mul, div, mod, square} = require("./calculator");

console.log("hello piyush".bgBlue.green)

const result = add(10,11);
console.log(result);




console.log(ad(10 , 20));
console.log(sub(10 , 20));
console.log(mul(10 , 20));

try{
    console.log(div(10 , 0));
}catch(error){
    console.log(error.message);
}

console.log(mod(10 , 2))
console.log(square(2))