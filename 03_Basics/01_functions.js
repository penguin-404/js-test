function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1,num2){  //num1 and num2 => parameters
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){   
    // let result = num1 + num2
    // return result
    return num1+num2
}

const Result = addTwoNumbers(3,3) // 3,3 are arguments.
// console.log("Result: ",Result);

function loginUserMessage(username = "Guest"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Kaushal"));

function calculateCartPrice(...num1){ // using rest operator (...)
    return num1
}

// console.log(calculateCartPrice(2,500,400));

const user = {
    username: "Kaushal",
    price: 230
}
const user2 = {
    username: "Avinay",
    price: 130
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "Derrick_",
//     price: 499
// })


const myNewArr = [200,400,100,600]

function returnSecondVal(getArray){
    return getArray[1]
}

// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([1,2,3,4]));



