// if statement

const isUserLoggedIn = true
const temperature = 42


if (temperature<50){
    // console.log("Temperature is less than 50");
} else {
    // console.log("Temperature is greater than 50");
}


// Comparison Operator
// <, >, <=, >=, ==, !=, ===

// const score = 200

// if (score>100){
//     let power = "fly"
//     console.log(`User power is ${power}`);
// }

// console.log(`User Power: ${power}`);

// ShortHand Notations

// const balance = 1000

// if (balance>500) console.log("Test");  // Implicit Scope

// if (balance<500) {
//     console.log("Less than 500");
// } else if (balance<750){
//     console.log("Less than 750");
// }else if (balance<950){
//     console.log("Less than 950");
// } else {
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true


if (userLoggedIn && debitCard){
    console.log("Allow to buy Courses.");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in.");
}