class User {
    constructor(username){
        this.username  =username
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;

    }

    addCourse(){
        console.log(`New Course was added by: ${this.username}`);
    }
}


const Ram = new Teacher("Ram","ram@fb.com","123");
// console.log(Ram.addCourse());
Ram.addCourse()


const kaushal = new User("Kaushal")
kaushal.logMe()