const user = {
  username: "Suraj",
  price: 199,

  welcomeMessage: function () {
    // console.log(`${this.username} , Welcome to website`);
    // console.log(this);
  },
};
user.username = "Suraj Kumar";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//   //   console.log(this);
//   let username = "Suraj";
//   console.log(this.username);
// }

// const chai = () => {
//   //   console.log(this);
//   let username = "Suraj";
//   console.log(this.username);
// };
// chai();

// const addTwo = (num1, num2) => {  // In curly bracket we have to write return keyword
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2; // In paranthesis keyword we don't have to write return keyword

const addTwo = (num1, num2) => ({ username: "Suraj" });

console.log(addTwo(5, 6));
