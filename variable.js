// This is comment and it describes the next thing happening before another comment

// console.log('hi');

// Variable is a space in the computer memory where we can put infomation and retrieve information

// declaring variables x equals to 7

let x = 7;

// declaring variables y equals to 3

let y = 3;

// declaring variables z equals to x + y

let z = x + y;

console.log('The answer is: ' + z);

// let is an instruction to the JavaScript compiler that we want to create a variable named 'x'. This create a space to store data. x is the identifier of the variable. 

// 'var' does almost same thing as 'let', but it does stuff that newbies may not understand its ramification until it's too late. JS recommends using let instead of var except you really need to use 'var'. Cant be pretty challenging so 'let' was created.

// 'const' is another keyword to name variable and it means that that the variable data is not going to change throughout the lifetime of the application.

const x = 70;
x = 60;
let y = 30;
let z = x + y;
consle.log('The second answer is: ' + z);