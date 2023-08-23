// Q1 - Hoisting
/*
// What is the Output of :-
function abc() {
  console.log(a, b, c);
  var a = 10;
  let b = 20;
  const c = 30;
}
abc();
// Answer :- undefined, error, error (ReferenceError: Cannot access 'b' before initialization)
// var is hoisted so it prints undefined since it is not yet initialized
// let and const are also hoisted but in the temporal dead zone
// Temporal Dead Zone is the state where the variables are in the scope but not yet declared
*/

////////////////////////////////////////////////////////////////////
// Q2 - Implicit & Explicit Binding
/*
// a : What is the Output of :-
var obj = {
  name: "Ankur",
  display: function () {
    console.log(this.name);
  },
};
var obj1 = {
  name: "ABC",
};
obj.display.call(obj1);
// Answer :- ABC
// When we use call() it provides a new context to the function
// thus the function does'nt use it's original context

// b : What is the Output of :-
var obj = {
  name: "Ankur",
  display: () => {
    console.log(this.name);
  },
};
var obj1 = {
  name: "ABC",
};
obj.display.call(obj1);
// Answer :-
// In case of an arrow function the "this" keyword always points to the global/window object,
// since there is no "name" variable in the global/window thus the console is empty
// try adding var name="xyz" globally
*/

////////////////////////////////////////////////////////////////////
// Q3 - Caching/Memoize function using JavaScript
/*
// Random Function that takes much time :-
const clumsySq = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};
console.time("First Call");
console.log(clumsySq(9876, 9643));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumsySq(9876, 9643));
console.timeEnd("Second Call");
// The above code takes about 137ms thus we need to cache the result somewhere to optimize the speed

// Optimized Code :-
function cacheData(func, context) {
  const res = {}; // the result or cache for the previously executed function will be stored here
  // res={
  //   "5,6":30,  this is how the result obj will look like
  // }
  return function (...args) {
    // taking arguments from the user
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      // if the result is already not present in cache then calculate the result
      res[argsCache] = func.call(context || this, ...args);
      // if a context is specified then use that else use the current context
    }
    return res[argsCache];
  };
}
const clumsySquare = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};
const memoizedClumsySquare = cacheData(clumsySquare); // will return a function
console.time("First Call");
console.log(memoizedClumsySquare(9876, 9643));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedClumsySquare(9876, 9643));
console.timeEnd("Second Call");
*/

////////////////////////////////////////////////////////////////////
// Q4 - Event Loop
/*
// What is the Output of :-
console.log("a");
setTimeout(() => console.log("set"), 0);
Promise.resolve(() => console.log("pro")).then((res) => res());
console.log("b");
// Output :-
// a - first in call stack thus prints as usual
// b - second in call stack thus prints as usual
// pro - microtask/priority queue
// set - task queue

// setTimeout isn't part of JS but of the Web api or browser,
// it runs when the complete code inside JS file has ran successfully even if the time provided is 0ms
// setTimeout thus goes inside our task queue
// Promise resolve also runs when the complete code inside JS file has ran successfully
// Promise resolve goes inside our micro task queue(priority queue) not the task queue
// microtask queue has higher priority than task queue thus is executed first
*/

////////////////////////////////////////////////////////////////////
// Q5 - Infinite Currying
/*
// Implement this :- console.log(add(2)(3)(7)(7)(3)())
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(2)(3)(7)(2)(3)());
*/

////////////////////////////////////////////////////////////////////
// Q6 - Implement this Code :-
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);
