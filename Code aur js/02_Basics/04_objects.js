const tinderUser = new Object()

tinderUser.id = "770abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// const regularUser = {
//     email: "123@abc.com",
//     fullName: {
//         userFullName:{
//             firstName:"Suraj",
//             lastName:"Kumar"
//         }
//     }
// }

// console.log(regularUser);
// console.log(regularUser.fullName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}
console.log(obj4);
console.log(obj3);

// Tinder User 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor, price} = course
console.log(instructor);
console.log(price);
