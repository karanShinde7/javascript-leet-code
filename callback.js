function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
function callbackFunction(){
    console.log("Call back function");
}
function thirdFunction(callbackFunction){
    callbackFunction()
    console.log("Third function called");
}
thirdFunction(callbackFunction)
firstFunction();
secondFunction();

function sum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
  }
  console.log("function length", sum.length); // 4 is the number of parameters expected.
// Output;
// Second function called
// First function called