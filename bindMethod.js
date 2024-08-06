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
console.log("Using apply() function borrowing ");
nameObject.printFullName.apply(nameObject2);

function sayHello(homeTown, state){
    console.log("--> I am "+this.firstName+" "+this.lastName, "and I am from "+homeTown+", "+state);
}

console.log("Separate function add apply()");
sayHello.apply(nameObject,["Pune", "Maharashtra"])
sayHello.apply(nameObject2,["Delhi", "Delhi"])
