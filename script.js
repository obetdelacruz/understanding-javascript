/*
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
firstLetterOfLastName = lastName.length;
console.log(firstLetterOfLastName);
console.log(lastName);
*/

/*
let firstLetterOfHelloWorld = "";
let myStr = "Jello World";
firstLetterOfHelloWorld = myStr[0];
firstLetterOfHelloWorld -= myStr;
console.log(firstLetterOfHelloWorld);
*/

/*
const lastName = "dela cruz";

const fourthLetterOfMyLastName = lastName[5];
console.log(fourthLetterOfMyLastName);


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks =
  "It was really a + "myAdjective" + "myNoun" and we + "myVerb" + "myAdverb";
console.log(wordBlanks);



const name = "john";
const age = 35;

const message = `My name is ${name} and my age is ${age} years old.`;
console.log(message);


let ten = 10;
console.log(ten * ten);


// food prices
let beerCost = 10;
let burgerCost = 15;
let softdrinkCost = 15;

// user's money
let accountBalance = 30;

function accountBalance(10, 15, 30) {
  accountBalance = accountBalance - beerCost - burgerCost - softdrinkCost;
  console.log(accountBalance);
}

accountBalance();


function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(2, 5));


const name = "Lobert";
const age = 40;

const person = {
  name,
  age,
};

console.log(person);


let user = {
  name: "john",
  age: 30,
};

console.log("name" in user);

//Modify Array Data with Indexes

const myArray =[18, 04. 99];
myArray[0] = 45;

//Access Multi-Dimensional Arrays with Indexes//

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];


// Manipulate Arrays with Push Method //

const myName = ["Obet", "Jean", "Chris", ["Donald", 25]];
myName.push(["Joshua", 37]);


//Manipulate Arrays with POP Method //

const myArray = [
  ["John", 27],
  ["Ana", 30],
];
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
console.log(myArray);

//Manipulate Arrays With shift Method//


const myArray = [["John", 23], ["dog", 3]];


const removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);
console.log(myArray);


// Manipulate Arrays With unshift Method

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul",35]);
console.log(myArray)


//Shopping List

const myList = [["back pack", 17],["pants", 20],["cake", 18],["bike", 50],["car", 100]];
console.log (myList);

// Write Reusable JavaScript with Functions //

function reusableFunction() {
  console.log("Hi World")
}
reusableFunction();


// Passing Values to Functions with Arguments //
function functionWithArgs(num1, num2){
  console.log(num1 + num2);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);



//Return a Value from a Function with Return//
function timesFive(num) {
  return num * 5;
}

const product = timesFive(5);
console.log(product);


//Global Scope and Functions//

Note! In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

Instruction: 
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions //
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);

The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

function myLocalScope() {
  // Only change code below this line
  const myVar = "local";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();



Understanding Undefined Value returned from a Function

A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive(){
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();



Assignment with a Returned Value
If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have defined a function sum which adds two numbers together.

ourSum = sum(5, 12);

//Calling the sum function with the arguments of 5 and 12 produces a return value of 17. This return value is assigned to the ourSum variable.

Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);



let myArray = [
  "apple",
  "banana",
  "orange",
  "melon",
  { name: "Alice", age: 30, profession: "teacher" },
  { name: "Bob", age: 25, profession: "engineer" },
  { name: "Charlie", age: 40, profession: "doctor" },
  { name: "Dave", age: 22, profession: "student" },
];

function getNames(arr) {
  let names = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && arr[i].hasOwnProperty("name")) {
      names.push(arr[i].name);
    }
  }

  return names;
}

console.log(getNames(myArray));
/*
console.log(myArray[4].profession, myArray[1]); // Output: "apple"
console.log(
  `My name is ${myArray[5].name}, and I love eating ${myArray[1]}. I want to be a ${myArray[6].profession} someday.`
);
console.log(myArray.length);
console.log(myArray);


function sumOfNumbers(a, b) {
  return a + b;
}
console.log(sumOfNumbers(4, 5));


function productOfTwoNumbers(a, n) {
  return a * n;
}

console.log(productOfTwoNumbers(8, 5));



function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "it was true";
  }
  return "it was false";
}

console.log(trueOrFalse(false));
console.log(trueOrFalse(true));


function testEqual(val) {
  if (val === 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));


function testStrict(val) {
  if (val === 12) {
    return "Equal";
  } else return "Not Equal";
}
console.log(testStrict(12));


function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "not equal";
}

console.log(compareEquality(4, "4"));


function testEqual(val) {
  if (val != 99) {
    return "not equal";
  }
  return "equal";
}

console.log(testEqual(99));


function testNotequal(val) {
  if (val !== 17) {
    return "not equal";
  }
  return "equal";
}

console.log(testNotequal(17));

const h1 = document.querySelector("h1");
h1.style.background = "red";
h1.addEventListener("click", function () {
  h1.style.background = "none";
});


const h1 = document.querySelector("h1");
function toggleBackground(element) {
  element.classlist.toggle("background");
}
h1.addEventListener("click")

const h1 = document.querySelector ()



// Define an array of user objects
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 },
];

// Get a reference to the HTML element where we'll display the list
const userList = document.getElementById("user-list");

// Use a for loop to generate the HTML for each list item
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const listItem = document.createElement("li");
  listItem.textContent = user.name;
  userList.appendChild(listItem);
}

function testGreaterThan(val) {
  if (val > 100) {
    return " over 100";
  }

  if (val > 10) {
    return "over 10";
  }
  return "10 or under";
}

console.log(testGreaterThan(11));


function testLogicalAndOperator(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAndOperator(100));

*/

function testLogicalOrOperator(num) {
  if (num > 20 || num < 10) {
    return "Outside";
  }
  return "inside";
}
console.log(testLogicalOrOperator(10));
