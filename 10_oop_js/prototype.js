let myName = "Kaushal    "

// console.log(myName.length);

let myHeros = ["Wayne","Specter","Bond"]

let heroPower = {
    Wayne: "Money",
    Specter: "Law",
    Bond: "Spy",

    getSPecterPower: function (){
        console.log(`Specter Power is: ${this.Specter}`);
    }
}

Object.prototype.kaushal = function(){
    console.log(`Kaushal is present in all objects.`);
}

// heroPower.kaushal()

Array.prototype.heyKa = function(){
    console.log(`Hello from Kauhsal`);
}

myHeros.kaushal()
myHeros.heyKa()
// heroPower.heyKa()

// Inheritance

const user = {
    name: "Harvey",
    email: "pearson@hardman.com"
}

const Teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    // __proto__: teachingSupport
}


// Teacher.__proto__ = user Outdated Approach


// Modern Syntax

Object.setPrototypeOf(teachingSupport,Teacher)


String.prototype.trueLength  = function(){
    console.log(this);
    console.log(`True length of the string is: ${this.trim().length}`);
}

myName.trueLength()

let anotherName = "Hello            "
anotherName.trueLength()
