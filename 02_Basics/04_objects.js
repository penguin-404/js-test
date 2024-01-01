const tinderUser = new Object()  //declaring objects. Singleton Object  

// const tinderUser = {}   // Also a way of declaring the object. Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Jaysum"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    name: "Jrue",
    email: "Jrue@celtics.com",
    fullname: {
        userfullname: {
            firstname: "Jrue",
            lastname: "Holiday"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "a",
    5: "b",
    6: "c"
}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1,obj2) //returns the object to obj1.
// const obj4 = Object.assign({},obj1,obj2) //returns new object to targrt({}) object.


const obj3 = {...obj1,...obj2}
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));



