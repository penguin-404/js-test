class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const kaushal = new User("Kaushal")
// console.log(kaushal.createID())


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Shyam = new Teacher("Shyam","Shyam@fb.com")
console.log(Shyam.createID())