// for of loop

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each character is: ${greet}`);
// }

// Maps--> It's like an Array.

const map = new Map()
map.set('NEP',"Nepal")
map.set('USA',"United States of America")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}