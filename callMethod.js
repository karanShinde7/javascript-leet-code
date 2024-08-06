const nameObject = {
  firstName: "Karan",
  lastName: "Shinde",
  printFullName: function () {
    console.log("--> "+this.firstName + " " + this.lastName);
  },
};
console.log("Direct function call ");
nameObject.printFullName();

const nameObject2 = {
  firstName: "Virat",
  lastName: "Kohli",
};
console.log("Using call() function borrowing ");
nameObject.printFullName.call(nameObject2);

function sayHello(){
    console.log("--> Hi "+this.firstName+" "+this.lastName);
}

console.log("Separate function add call()");
sayHello.call(nameObject)
sayHello.call(nameObject2)
