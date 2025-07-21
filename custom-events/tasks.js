//     1     //
// const createCounter = (n) => {
//   let count = n;

//   return () => {
//     return count++;
//   };
// };

// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

//      2       //
const createCounter = function (init) {
  let counter = init;

  return {
    increment: () => ++counter,
    decrement: () => --counter,
    reset: () => {
      counter = init;
      return counter;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
