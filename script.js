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
*/
