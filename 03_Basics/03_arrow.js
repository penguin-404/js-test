const user = {
    username: "kaushal",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Pat"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "kaushal"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "kaushal"
//     console.log(this.username);
// }

const chai = () => {
    let username = "kaushal"
    console.log(this);
}

// chai()

// Basic Arrow Function
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// Implicit return
// const addTwo = (num1,num2) => num1 + num2


// const addTwo = (num1,num2) => (num1 + num2) //Mostly used in react.
// Always use return with curly braces.

const addTwo = (num1,num2) => ({username: "kaushal"}) // Objects are wrapped around the parenthesis for returning purpose.

console.log(addTwo(3,4));

const myArray = [2,5,3,7,8]
myArray.forEach