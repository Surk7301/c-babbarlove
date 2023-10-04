// JavaScript Execution Context
// Global Execution --> this
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

// {} --> Memory Creation Phase
//   --> Execution Phase

let val1 = 10;
let val2 = 5;
function addTwo(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result = addTwo(val1, val2);
console.log(result);
let result2 = addTwo(5, 7);

// 1. Global Execution --> this
// 2. Memory Phase
// val1-- > Undefined;
// val2-- > Undefined;
// addTwo --- > definition
// result1 -- undefined
// result2 -- undefined

// 3. Execution Phase
// val1-- > 10;
// val2-- > 5;
