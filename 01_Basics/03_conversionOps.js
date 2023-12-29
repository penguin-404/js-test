let score = "12"

console.log(typeof score)

let vauleInNumber = Number(score)
console.log(typeof vauleInNumber)
console.log(vauleInNumber);

// Conversion Results
// "12" => 12
// "12k" => NaN [Not a Number]
// null => 0
// undefined => NaN
// true,false => 1,0

let isLoggedIn = 8
let BoolLoggedIn = Boolean(isLoggedIn)
console.log(BoolLoggedIn);

// 1 => true; 0 => false
// "" => false; "abc" => true

let someNumber = 12
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);