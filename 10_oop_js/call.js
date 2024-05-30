function setUserName(username){
    // complex DB Calls
    this.username = username
}

function createUser(username,email,password){
    setUserName.call(this, username)

    this.email = email
    this.password = password

}

const user = new createUser("Kaushal","k@fb.com","123")

console.log(user);