const userEmail = "123@abc.com";

if (userEmail) {
  console.log(`Your E-Mail id is: ${userEmail}`);
} else {
  console.log("No Email found");
}

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ",[], function(){},

const users = [];
if (users.length === 0) {
  console.log("It's an empty array");
} else {
  console.log("Array contains some value");
}

const emptyUsersObject = {};
if (Object.keys(emptyUsersObject).length === 0) {
  console.log("It's an empty object");
}

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null??10
// val1 = undefined ?? 15;
// console.log(val1);

// Ternary Operator
// condition ? true : false;

const isTeaPrice = 100;
isTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
