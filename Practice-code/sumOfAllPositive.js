const numberArray = [1,2,9,-5,3,-10,26,-53];
let sumOfPositiveNo = 0;

//get all the positve numbers
const positiveNo = numberArray.filter(num => num > 0);

sumOfPositiveNo = positiveNo.reduce((sum, num) => sum + num, 0);

console.log("Origitnal array: ", numberArray);
console.log("Positive numbers are: ", positiveNo.join(", "));
console.log("Sum of all the postive number is: ", sumOfPositiveNo)