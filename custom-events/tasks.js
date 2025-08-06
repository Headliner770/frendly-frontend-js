//      1      //
// const createCounter = (n) => {
//   let counter = n;

//   return () => {
//     return counter++;
//   };
// };

// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

//      2      //
// const createCounter = function (init) {
//   let counter = init;

//   return {
//     increment: () => 
//       ++counter,
//     decrement: () => 
//       --counter,
//     reset: () => {
//       counter = init;
//       return counter;
//     },
//   };
// };

// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4

// const colorConfig = {
//   red: true,
//   blue: false,
//   green: true,
//   black: true,
//   yellow: false,
// };

// const colors = ["pink", "red", "blue"];

// console.log(colorConfig[colors[1]]);

let a = 2;
let b = a;

a = 6;

console.log(a)
console.log(b)
