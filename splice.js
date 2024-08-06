let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
console.log(
  "array with splice -> " +
    arrayIntegers1 +
    " & original array " +
    arrayIntegersOriginal1
);
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
console.log(
  "array with splice -> " +
    arrayIntegers2 +
    " & original array " +
    arrayIntegersOriginal2
);
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
console.log(
  "array with splice -> " +
    arrayIntegers3 +
    " & original array " +
    arrayIntegersOriginal3
);
