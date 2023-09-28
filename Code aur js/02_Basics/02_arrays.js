const marvel_heros =["thor",  "Ironman", "Spiderman"]
const dc_heros =["Superman", "flash", "Batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const concat_heros = marvel_heros.concat(dc_heros)
// console.log(concat_heros);

const all_heros =[...marvel_heros, ...dc_heros]
// console.log("all heros: ", all_heros );

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Suraj"));
console.log(Array.from("Suraj"));
console.log(Array.from({name: "Suraj"})); // Intersting for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
