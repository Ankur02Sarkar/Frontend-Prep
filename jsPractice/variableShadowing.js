// scopeDemo.js

function demonstrateVariableShadowing() {
  /*
    Shadowing = Overwriting an existing variable in another scope
    let : original value is not overwritten
    var : original value is overwritten
    const : overwriting/redeclaration not possible
    */
  console.log("Demonstrating variable Shadowing");
  let a = "Hello";
  var b = "Good";
  const c = "Hi";
  console.log("initial value of a : ", a); // Logs "Hello"
  console.log("initial value of b : ", b); // Logs "Good"
  if (true) {
    let a = "World";
    console.log("a from inside the block : ", a); // Logs "World"

    var b = "Morning";
    console.log("b from inside the block : ", b); // Logs "Morning"

    // const c = "Everyone"; // Redeclaration not possible
  }
  console.log("a from outside the block : ", a); // Logs "Hello"
  console.log("b from outside the block : ", b); // Logs "Morning"
}

module.exports = demonstrateVariableShadowing;
