////////////////////////////////////////////////////////////////////
// Q1 - Map vs forEach
/*
const arr = [2, 5, 3, 4, 7];
const mappedRes = arr.map((a) => {
  return a + 2;
});
const forEachRes = arr.forEach((a,idx) => {
  return a + 2;
});
console.log(mappedRes, forEachRes); // [ 4, 7, 5, 6, 9 ] undefined
// Thus we can see that map returns a new array but forEach does'nt return anything
// Map does'nt modify the original array
// forEach behaves like a for loop, thus we can modify the original array using arr[idx]
// Since map returns an array we can append other methods like filter(), push() etc to it
*/

////////////////////////////////////////////////////////////////////
// Q2 - null vs undefined
/*
let a;
let b = null;
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(a); // undefined
console.log(b); // null
console.log(c); // not defined
// null is an actual value i.e. it's data type exists
// undefined means variable is declared but not initialized yet

// Follow Up Question
console.log(null == undefined); // true
console.log(null === undefined); // false
// == compares entities without matching their types
// === strictly compares entities along with their types
*/

////////////////////////////////////////////////////////////////////
// Q3 - Event Delegation
/*
// When we provide the event listener to the parent and access the it's childs through it
document.querySelector("#products").addEventListener("click", (e) => {
    console.log(e);
    if (e.target.tagName === "LI") {
        console.log(e.target.id);
    }
});
*/

////////////////////////////////////////////////////////////////////
// Q4 - Flatten the Array (custom flat function) :-
/*
let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];
// let flattenedArr = [].concat(...arr); // 1D Flatten
function flatten(arr, depth = 1) {
  let res = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      res.push(...flatten(ar, depth - 1));
    } else {
      res.push(ar);
    }
  });
  return res;
}
console.log(flatten(arr,2));
*/

////////////////////////////////////////////////////////////////////
// Q5 - var vs let vs const
// https://miro.medium.com/v2/resize:fit:720/format:webp/1*yj0O5G2RRrYK_d9qkEqQQg.png
/*
// var is functional scoped, let & const is block scoped
{
  var a = "hello";
  let b = "world";
  const c = "Hi";
  console.log("Inside Block");
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log("\nOutside Block");
console.log(a);
console.log(b);
console.log(c);

// re-declaration is allowed only for var
var a=5
var a=7
console.log(a);

// const cannot be re-initialized
const a = 7;
a = 3;
console.log(a);

// const cannot be an empty variable
var a
let b
const c
console.log(a,b,c);
*/

////////////////////////////////////////////////////////////////////
// Q6 - Output of setTimeout
/*
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // 3 3 3
    }, i * 1000);
  }
}
a();

// Since var is functional scoped, for first loop iteration i=0 but it wont be printed since
// setTimeout will execute only after the loop has run successfully
// When you use var to declare i, it is function-scoped, so by the time the setTimeout callbacks are
// executed, the loop has already finished, leaving i at its final value of 3.
// Solution :- use let since it is block scoped. now when the setTimeout will try to log the
// reference of i it will print 0 1 2 since i is now block scoped
// Solution 2 :- (using closures)
function a() {
  for (var i = 0; i < 3; i++) {
    (function (j) {
      setTimeout(function log() {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}
a();
*/

////////////////////////////////////////////////////////////////////
// Q7 - Explain call, apply, bind
/*
var person = {
  name: "Ankur",
  hello: function (thing) {
    console.log(this.name + " says hello " + thing);
  },
};
person.hello("world");

var nickName = {
  name: "Rohon",
};
person.hello.call(nickName, "world0"); // providing a new context
person.hello.apply(nickName, ["world1"]); // same as call but params need to be in a array
const newFunction = person.hello.bind(nickName); // returns a new func with given context
newFunction("world2");
*/

////////////////////////////////////////////////////////////////////
// Q8 - Infinite Currying
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
// Q9 - Compose  Function
// const evaluate = compose(func1, func2, func3)
// res of func3 is sent as param to func2 then func1, func3's param is given to evaluate variable
/*
 */
function addFive(a) {
  return a + 5;
}

function substractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}
const compose = (...functions) => {
  return (args) => {
    functions.reduceRight(arg,fn)
  };
};
const evaluate = compose(addFive, substractTwo, multiplyFour);
console.log(evaluate(5));
