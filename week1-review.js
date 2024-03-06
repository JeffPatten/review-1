/*----  Data types or values  ----*/

// Primitive or simple data types = string, number, boolean(true or false), undefined, null
// arrays, objects

let string = "some string of text"; //anything you put between single quotes (''), double quotes (""), or template strings (``)
let num = 12;
let boolean = true; // or false
let isDefined; // this is undefined
let nothing = null;
let arr = ["something", 3, false, [], {}]; //collection of data that correlate. ie favorite foods
let obj = {
  //collection of data that correlates but allows us to name properties/keys
  name: "jeff",
  favColor: "blue",
  favNum: 18,
};

/*----  Variables  ----*/

//declarations/declaring variables
let username = ""; // The 'let' keyword let's you reassign a value
const aVariable2 = "a value"; // constant value - must give it a value, and it will always stay that value
const isSkyBlue = true; // const for anything you want to alsway stay the same

//reassign a value

username = "jPatten";
// aVariable2 = 12    const variables cannot be reassigned a value

// Variables are like a file cabinet drawer that you have labeled. When you want to use what is in that drawer you use a label.
if (username) {
  // if('jPatten') {
  console.log(`the username is ${username}`); // console.log(`the username is jPatten`)
} // }

/*----  Arrays - collection of data. Usually, a collection of like data, ex, people, favorite foods, prices  ----*/

let arr2 = ["hello", 12, true, [], {}, undefined, null]; //can contain any data type. An ordered list of data
// index/position  0     1    2    3   4    5          6
// length          1     2    3    4   5    6          7

//accessing values - you are accessing a value by referencing the array and then the index in square brackets. like an address street[house number].  varName[0] reads as the array at index/position 0, or 1, or 2, etc
arr2[0]; //  returns 'hello'
arr2[2]; // returns true

// (varName.length - 1) is the last index/position in the array. length is 7, position/index is 6

// properties - information about the array, methods - functions that we can run on the array

arr2.length; // this is a property - 7
// arr2.pop().push("howdy"); // drops the last item in the array / add's an item to the end of the array. These are called methods/functions

//for loops - this loops through an array, while loop, .map(), .filter(), .forEach(). The whole purpose of loops is to get each value of an array and do some code with it.

for (let index = 0; index < arr2.length; index++) {
  console.log(arr2[index]);
}

/*----  Objects - collection of data, with key value pairs. The keys describe what the values are. (ex firstName: 'Jeff')  ----*/

let person = {
  // The only reason each key/value is in a separate line is to make it easier to read.
  firstName: "Jeff", // left side is key(property), right side is value
  lastName: "Patten",
  favColor: "blue",
};

let person2 = {
  firstName: "Arianna",
  lastName: "Contardo",
  favoriteColor: "pink",
};

// accessing values

// dot notation - object name dot key name = obj.key  !!!!MOST USED!!!!
person.favColor; // this returns 'blue'
person2.favoriteColor; //this returns 'pink'

//bracket notation - use a string for the key name or a variable.  !!!MOSTLY USED in specific loops - not often used!!!
person["favColor"]; // with quotes, you are using a key name.           returns 'blue'

let color = "favoriteColor";
person2[color]; // => person2['favoriteColor'] // without quotes, you are using a variable name.   returns 'pink

/* -------------------------------- CONDITIONALS ------------------------------- */

// if (a condition - truthy/falsy) {                            // The 'if' keyword lets javascript know to expect certain syntax (grammar). ie there should be parenthesis and then curly brackets
      //run some code
// } else if (another condition ) {                             // with multiple conditions, javascript will find the first true condition and run it's code, then quit the rest of the if/else statements
      //run some code
// } else {
      //run some code
// }

// falsy values = an empty string (''), 0, false, null, undefined

let isRaining = false;

if (isRaining){                      //whoAmI is a string that has a value. It evaluates as true or as a truthy value. 
  console.log(`It's so rainy!`)
} else {
  console.log(`It's so sunny!!!`)
}

let whoAmI = `I don't know.`;
console.log(whoAmI)

if (whoAmI === `I'm Jeff`) {
  console.log('Party Time')
} else if ( whoAmI === `I don't know.`) {
  console.log(`It's time to find yourself.`)
  whoAmI = `I'm Jeff`
} else if (whoAmI === `I don't know.`) {                 //won't run because the previous else-if statement was true
  console.log('Will this run?')
}

console.log(whoAmI)