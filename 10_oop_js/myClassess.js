// ES6

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const kaushal = new User("kaushal","k@fb.com","hello123")

console.log(kaushal.encryptPassword());
console.log(kaushal.changeUserName());

// behind the scene

