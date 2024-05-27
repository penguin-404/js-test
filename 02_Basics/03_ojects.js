// Singleton
// Object.create() 

// Object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Ramshankar",
    "full name": "Ramshankar Mho",
    [mySym]: "mykey1",
    age: 20,
    location: "Cairo",
    email: "rs@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// To use Symbol in an object key. The syntax is to name the symbol in square brackets '[]'.

JsUser.age = 25
// console.log(JsUser["age"]);
// Object.freeze(JsUser)   // FreeZING the object
JsUser.age = 30
// console.log(JsUser["age"]);

JsUser.greeting = function () {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
