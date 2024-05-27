const name = "Shivam"
const repoCount = 10

// console.log(name + " has a github repository of " + repoCount );
// Outdated form of string concatenation in Js

// Using Backticks
console.log(`Hello, my name is ${name} and my repository count on Github is ${repoCount}`)
// This method is known as String Interpolation Method.

// New way  of declaring String
const gameName = new String('Counter-Strike-20')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,7)
console.log(newString)

const anotherString = gameName.slice(-12,-9)
console.log(anotherString)

const newStringOne = "    Ram      "
console.log(newStringOne.trim());

const url = "https://shyam.com/shyam%20khanal"
console.log(url.replace('%20','-'));

console.log(url.includes('shyam'));

console.log(gameName.split('-'));


