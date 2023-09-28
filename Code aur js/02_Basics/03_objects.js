// Singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const jsUser = {
    name:"Suraj",
    "Desi gnation" : "ASE-Trainee",
    [mySym]: "mykey1",
    Age : 2,
    Address : "Patna",
    Email: "sukr7581@gmail.com",
    isLogggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
jsUser.Age = 21
// console.log(jsUser);
// console.log(jsUser["Desi gnation"]);
// console.log(jsUser.Email);
// console.log(jsUser["Address"]);
// console.log( jsUser[mySym]);

// Object.freeze(jsUser);

jsUser.greeting = function (param) {
    console.log("Namaste Dunia");
    
}
jsUser.greetingTwo = function(){
    console.log(`My Name Is ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());