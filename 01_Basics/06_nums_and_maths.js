const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 20.39456
// console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++ MATHS ++++++++++++++
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.1));

// const Number1 = 3
// console.log(Math.pow(Number1,3));

console.log(Math.random()); // Always gives values between 0 and 1.
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1))+ min);
