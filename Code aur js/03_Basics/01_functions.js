// function sayMyName() {
//   console.log("S");
//   console.log("u");
//   console.log("r");
//   console.log("a");
//   console.log("j");
// }

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

const result1 = addTwoNumbers(14, 12);

// console.log("Result: ", result1);

// function loginUserMessage(username) {
//   if (username === undefined) // Also we can write if(!username)
//   {
//     console.log("Please enter your username");
//   } else {
//     return `${username} just logged in`;
//   }
// }
// console.log(loginUserMessage("Suraj"));

// function calculateCartPrice(...num1) { //In parameter(var1, var2, ...num1  )like this we can enter
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 566));

const user = {
  name: "Suraj",
  price: 199,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
