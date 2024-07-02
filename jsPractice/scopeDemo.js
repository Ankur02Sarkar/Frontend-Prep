// scopeDemo.js

function demonstrateScope() {
    /*
    Var is Function Scoped
    Let and Const are block scoped
    */
  console.log("Demonstrating scope of VAR, LET, and CONST");

  {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("a from block scope", a); // Logs Value Correctly
    console.log("b from block scope", b); // Logs Value Correctly
    console.log("c from block scope", c); // Logs Value Correctly
  }

  console.log("a from global scope", a); // Logs Value Correctly
  console.log("b from global scope", b); // ReferenceError: b is not defined
  console.log("c from global scope", c); // ReferenceError: c is not defined
}

module.exports = demonstrateScope;
