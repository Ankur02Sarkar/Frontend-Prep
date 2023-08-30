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
/*
 */


////////////////////////////////////////////////////////////////////
// Q6 -
/*
 */


////////////////////////////////////////////////////////////////////
// Q7 -
/*
 */

