const user = {
    username: "Kaushal",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user Details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("kaushal", 8, true)
const userTwo = new User("Hello", 9, false)
console.log(userOne);
console.log(userTwo);