// # Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);

console.log(id == anotherId);

const bigNumber = 454734768453434n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myProfile = {
    name: "Suraj",
    age: 23,

}

console.log(heros);
console.log(myProfile);

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);








// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "switch2Code"
let anotherName = myYoutubename
anotherName = "Xploree India"
console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user1@abc.com",
    upi: "user1@ybl"
}

let userTwo = userOne

userTwo.email = "user2@abc.com"

console.log(userOne.email);
console.log(userTwo.email);

//  ********** Maths **********************

