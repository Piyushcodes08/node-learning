console.log('piyush gond')


// task 1
// My name is Piyush (pring);

// (ans)
console.log('My name is piyush')

// task 2
let city = "Ahmedabad";
let age = 26; //(declare)

// (ans)
console.log(`i am from ${city}`);
console.log(`i am ${age} years old`)

// task 3
// Take two numbers:
let x = 50;
let y = 25;
// Print:
// Addition
// Subtraction
// Multiplication
// Division

// (ans)
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)

// task 4
// Check:
// let marks = 80;
// If marks ≥ 33:
// Pass
// Otherwise:
// Fail

// (ans)

let marks = 76 ;
if(marks >= 33){
    console.log("pass");
}else{
    console.log("fail");
}



// task 5 
// Print numbers 1 to 10 using a for loop.

// (ans)
for(let i=1; i<=10; i++){
    console.log(i)
}


// challenges
// Challenge 1
// Print only even numbers from 1 to 20.

// (ans)
for(let x= 1; x <= 20; x++){
    if(x%2 === 0){
        console.log(x);
    }
}


// challeng 2
// Check whether the number is Even or Odd.

let num =13;

if(num % 2 === 0){
    console.log(`${num} is even number`);
}else{
    console.log(`${num} is odd number`);
}

// Challenge 3
// Print this pattern:
// *
// **
// ***
// ****
// *****

// (ans)

let result="" ;
for(let i=1 ; i <= 5 ; i++){
    result += "*";
    console.log(result)
}

for (let i = 0; i <= 5; i++) {
console.log("*".repeat(i))
}

// Question 1
// Print numbers from 10 to 1.

for(let i =10; i >= 1; i-- ){
    console.log(i)
}

// Question 2
// Find the sum of numbers from 1 to 10.

let sum =0;

for (let i = 1; i <= 10; i++) {
   sum += i; 
}
console.log(sum)

// Question 3
// Print this pattern:
// 1
// 12
// 123
// 1234
// 12345

let pattern = "";

for (let i = 1; i <= 5; i++) {
    pattern += i;
    console.log(pattern);
}
