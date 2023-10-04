// let a = 100;
// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log("Value of a is :", a);
//   var c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Suraj";

  function two() {
    const website = "Youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}
one();

if (true) {
  const username = "Suraj";
  if (username === "Suraj") {
    const website = "Youtube";
    // console.log(`UserName: ${username} & website is: ${website}`);
  }
  // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++

function addOne(number) {
  return number + 1;
}
console.log(addOne(4));

const addTwo = function (number) {
  return number + 2;
};

console.log(addTwo(5));
