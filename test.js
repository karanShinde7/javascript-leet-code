// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);
// function Vehicle(model, color, year, country) {
//   this.model = model;
//   this.color = color;
//   this.year = year;
//   this.country = country;
// }
// ans: {model: "Honda", color: "white", year: "2010", country: "UK"}
// The function declarations are hoisted similar to any variables.
// So the placement for Vehicle function declaration doesn't make any difference.

// ------------------------------------------------------------------------------------------//

// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);
// ans: 1, undefined and number
// Of course the return value of foo() is 1 due to the increment operator.
// But the statement let x = y = 0 declares a local variable x.
// Whereas y declared as a global variable accidentally. This statement is equivalent to,
// let x;
// window.y = 0;
// x = window.y;
// Since the block scoped variable x is undefined outside of the function,
// the type will be undefined too. Whereas the global variable y is available outside
// the function, the value is 0 and type is number.

// ------------------------------------------------------------------------------------------//

// console.log(0.1 + 0.2 === 0.3);
// ans: false
// This is due to the float point math problem. Since the floating point numbers are
// encoded in binary format, the addition operations on them lead to rounding errors.
// Hence, the comparison of floating points doesn't give expected results.

// ------------------------------------------------------------------------------------------//

// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);
// ans: 1undefined
// You can see function expression instead function declaration inside if statement.
// So it always returns true. Since it is not declared(or assigned) anywhere,
// f is undefined and typeof f is undefined too.

// ------------------------------------------------------------------------------------------//

// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

// ans:  [empty, 'b', 'c', 'd'], undefined, 4
// The delete operator will delete the object property but it will not reindex the array or
// change its length. So the number or elements or length of the array won't be changed.
// If you try to print myChars then you can observe that it doesn't set an undefined value,
// rather the property is removed from the array. The newer versions of Chrome use empty
// instead of undefined to make the difference a bit clearer.

// ------------------------------------------------------------------------------------------//

// var array1 = new Array(3);
// console.log(array1);

// var array2 = [];
// array2[2] = 100;
// console.log(array2);

// var array3 = [, , ,];
// console.log(array3);

// ans : [empty × 3], [empty × 2, 100], [empty × 3]

// ------------------------------------------------------------------------------------------//

// const obj = {
//   prop1: function () {
//     return 0;
//   },
//   prop2() {
//     return 1;
//   },
//   ["prop" + 3]() {
//     return 2;
//   },
// };

// console.log(obj.prop1());
// console.log(obj.prop2());
// console.log(obj.prop3());

// ans: 0, 1, 2
// ES6 provides method definitions and property shorthands for objects.
// So both prop2 and prop3 are treated as regular function values.

// ------------------------------------------------------------------------------------------//

// console.log(1 < 2 < 3); // 1<2 => true, true < 3 (1<3) => TRUE
// console.log(3 > 2 > 1); // 3>2 => true, true >1 (1>1) => FALSE
// true, false

// ------------------------------------------------------------------------------------------//

// const printNumbersArrow = (first, second, first) => {
//   console.log(first, second, first);
// };
// printNumbersArrow(1, 2, 3);
// ans: SyntaxError: Duplicate parameter name not allowed in this context

// ------------------------------------------------------------------------------------------//

// console.log(Math.min()); // Infinity
// console.log(Math.max()); // -Infinity

// ------------------------------------------------------------------------------------------//

// console.log(10 == [10]); // true
// console.log(10 == [[[[[[[10]]]]]]]); // true

// ------------------------------------------------------------------------------------------//

// console.log([1, 2] + [3, 4]);
// ans: 1,23,4
// The + operator is not meant or defined for arrays.
// So it converts arrays into strings and concatenates them.

// ------------------------------------------------------------------------------------------//

// const numbers = new Set([1, 1, 2, 3, 4]);
// console.log(numbers);

// const browser = new Set("Firefox");
// console.log(browser);

// ans:  {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
// Since Set object is a collection of unique values, it won't allow duplicate values in the
// collection. At the same time, it is case sensitive data structure.

// ------------------------------------------------------------------------------------------//

// var set = new Set();
// set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
// console.log(set);
// ans: { '+0', '-0', NaN, undefined }
// Set has few exceptions from equality check,
// All NaN values are equal
// Both +0 and -0 considered as different values

// ------------------------------------------------------------------------------------------//

let myNumber = 100;
let myString = "100";
if (!typeof myNumber === "string") {
  // same as if (!(typeof myNumber === "string"))
  console.log("It is not a string!");
} else {
  console.log("It is a string!");
}

// if (!typeof myString === "number") {
//   console.log("It is not a number!");
// } else {
//   console.log("It is a number!");
// }
// ans: It is a string!, It is a number!
// The return value of typeof myNumber or typeof myString is always a truthy
// value (either "number" or "string"). The ! operator operates on either typeof myNumber
// or typeof myString, converting them to boolean values. Since the value of both !typeof
// myNumber and !typeof myString is false, the if condition fails, and control goes to else block.
