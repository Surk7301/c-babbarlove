// if
// const isUserLoggedIn = 0;
// if (!isUserLoggedIn) {
//   console.log("Not Login");
// } else {
//   console.log("logged In");
// }

// < , >, <=, >=,  ==, !=, ===, !==

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }

// const balance = 1000;
// if (balance > 500) console.log("1000 cadre"), console.log("Able to spend 1000"); // Code quality Issue
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less tha 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else if (balance <= 1000) {
//   console.log("less than or equal to 1000");
// }

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("You are eligible to purchase this course.");
} else {
  console.log("You are not eligible");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
  console.log("Now You logged in");
} else {
  console.log("Error");
}
