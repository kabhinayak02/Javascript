// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); 
// Remove extra length, but trueLength is undifined. 
// we need to make new prototype for it.
// ----------------------------------------------------------------------------------

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
// -> hitesh is present in all objects

myHeros.hitesh()
//  -> hitesh is present in all objects

myHeros.heyHitesh()
// -> Hitesh says hello

heroPower.heyHitesh()
// -> heroPower.heyHitesh is not a function

// ----------------------------------------------------------------------------------

// Inheritance: Kiski property kiske andr karni hai.

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// ----------------------------------------------------------------------------------

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport can use all the propertirs of Teache.

// ----------------------------------------------------------------------------------

// Now come to problem.
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
// -> ChaiAurCode 
// -> True length is: 11

"hitesh".trueLength()
// -> hitesh
// -> True length is: 6
"iceTea".trueLength()
// -> iceTea
// -> True length is: 6