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
*/

// food prices
let beerCost = 10;
let burgerCost = 15;
let softdrinkCost = 15;

// user's money
let accountBalance = 30;

function accountBalance() {
  accountBalance = accountBalance - beerCost - burgerCost - softdrinkCost;
  console.log(accountBalance);
}

drinkBeer(accountBalance);
