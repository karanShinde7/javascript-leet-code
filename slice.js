let arrayIntegers = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
console.log("arrayIntegers.slice(0, 2) ", arrayIntegers1);

let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
console.log("arrayIntegers.slice(2, 3)", arrayIntegers2);

let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
console.log("arrayIntegers.slice(4)", arrayIntegers3);

let arrayIntegers4 = arrayIntegers.slice(-3, -1); //returns [3, 4]
console.log("arrayIntegers.slice(-3, -1)", arrayIntegers4);
