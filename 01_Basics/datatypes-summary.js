// Primitive
// 7 Types: String,Number,Boolean,BigInt,Null,Undefined,Symbol

//Js is dynamically typed.

const score = 100
const scoreValue = 100.1

const isLoggedIn = true
const outsideTemp = null
let userEmail;


const id = Symbol('12')
const anotherId = Symbol('12')
console.log(id === anotherId);

// Non-Primitive[Reference]
// Arrays,Objects,Functions


// ++++++++++++++++++++++++++++
// Memory Usage in JS
// Stack(Primitive) and Heap(Non-Primitive)

let myName = "Sam Bahadur"
let anotherName = myName
anotherName = "Hari Prasad"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@facebook.com",
    pay: "user@paypal"
}

let userTwo = userOne

userTwo.email = "shyam@google.com"

console.log(userOne.email)
console.log(userTwo.email)
