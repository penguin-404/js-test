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
console.log(loginUserMessage("Kaushal"));





