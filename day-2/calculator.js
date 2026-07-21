// Today's Practice Task
// Create a file named calculator.js.
// Add these four functions:
// ad
// sub
// mul
// div


//  ans

function ad (a ,b){
    return a + b;
}

function sub(a ,b){
    return a - b ;
}

function mul(a ,b){
    return a * b;
}

function div (a , b){
if(b === 0){
    throw new Error("number cannot divide by 0");
}else{
    return a / b ;
}
}

// mod(a, b)   
// square(a)   

function mod(a, b){
    return a % b;
}

function square(a){
    return a * a ;
}



module.exports = {ad , sub, mul, div, mod, square};