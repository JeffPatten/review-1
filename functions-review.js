/*          --------------------------------------- FUNCTIONS ---------------------------------------------   */

                                        // function declaration

function funcDec () {

}

                                        // function expression

const funcExpression = function () {

}

                                        // arrow functions

const funcExpressArrow = () => {}
const funcExpressArrow2 = param1 => {}       // if you have one and only 1 parameter, you don't have to use the parentheses.
const inlineArrowFunc = () => true           // if you are only returning something, you can leave off the curly brackets and the return keyword.


// .map((elem) => {
//  elem-1
// })

function mapFunc (elem) {
    return elem - 1
}

// .map(mapFunc)
                                        // The anatomy of a function

// function functionName (input or parameters or take in) {
//     code that is run when the function is called/invoked/used
//     return output
// }

// Calling a function

// functionName(arguments)



// Problem 1

// Write a function called damageAndDebuff that
// can take in `healthTotal`,`baseDamage`,
// and `healthDebuff` as parameters.

// Inside the function, subtract
// the value of the base damage from the health total, 
// and update the total to that value. 
// Calculate the healthDebuff and 
// subtract it from the total. 
// Return the new healthTotal.  

// Note: the numbers passed in for `healthDebuff` will be
// decimals, for example: .15 for a 15% health debuff.

          damageAndDebuff( 90,             5,            .05)
function damageAndDebuff (healthTotal, baseDamage, healthDebuff) {    // It is like you are describing how the code will run
    
    healthTotal = healthTotal - baseDamage
    //  healthTotal * (1 - healthDebuff)                           // 90 (1 - .15)  => 90 (.85) => 76.5
    healthTotal = healthTotal - (healthDebuff * healthTotal)       // 90 - (.15 * 90) => 90 - 13.5 => 76.5
    return healthTotal
}

damageAndDebuff(100, 10, .15)  // let healthTotal = 100, let baseDamage = 10, let healthDebuff = .15  Actually running the code with these values


// PRACTICE CODE 
// const character = {
//     name: 'Gimli',
//     health: 100
// }

// function damageAndDebuff (char, baseDamage) {
//     // console.log(char.health - baseDamage)
//     // console.log(char.health)
//     return char.health - baseDamage       // return 90
// }

// // damageAndDebuff(character, 10, .15) //healthTotal = 100, baseDamage = 10, healthDebuff = .15
// let newHealth = damageAndDebuff(character, 10, .15)
// console.log(newHealth)

/* --------------------------------- SYNTAX ----------------------------------- */
let arr = [{}, [], '', 2]
let str = 'Bob'
let obj = {
    arr: [],
    obj: {},
    str: `don't ${str}`,
    num: 2
}

// if () {}                      // () = condition, 
// for () {}                     //
function func2 () {}                   //
function func (parameters) {} // creating the function. Parameters are placeholders for the arguments you will use
// func(arguments) // running the function. arguments are the actual data you want to use when you run the function
// func(arguments2) 


// function inception () {
//     if (){
//         // if statement code
//         for () {
//             //for loop code runs
//             if () {
//                 // if statement code
//             }
//         }
//     } else if () {
//         if () {
//             for() {
                
//             }
//         }
//     }
// }

// [5, 6, 3, 1, 2, 3, 4, 5, 6, 7] => '(563) 123 - 4567'
// phoneFormatter([5, 6, 3, 1, 2, 3, 4, 5, 6, 7])
// phoneFormatter([your number])
// phoneFormatter([my number])
// phoneFormatter([alecs number])


///////////////////////////////////////////////////////////////////// Coding problems /////////////////////////////////////////////////////////////


function towerBuilder (num) {   // num will be how many floors. ie how many items are in the array.
    let tower = []

    // Part 1: figuring out the strings.
    // each floor will increase the number of characters in a string to teh next odd number. ie 1 floor = 1 character, 2 floors is 3 characters, 3 floors is 5 characters, etc
    
    // Part 2: how do we get each string in the array.
    // what tools do I have? .push, 


    return
}

// towerBuilder(3)



// Max of Two - https://ed.devmountain.com/materials/f46/exercises/challenge-max-of-two/
// Given the starting code of:

let x = 2
let y = 1
// Write a block of code that will print out the largest value. (print out usually means console.log)

// Using the given values as an example, your code should print out 2.

// To verify your code is working properly, try and change the values of x and y.

// As an additional challenge, print out 'The values are identical'. if x and y have the same value.

if (x > y) {
    console.log(x)
} else if(x === y){
    console.log('The values are identical.')
} else {
    console.log(y)
}


// Find The Range - https://ed.devmountain.com/materials/f46/exercises/challenge-find-the-range/
// Difficulty
// Easy

// Concepts
// Loops, General


// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

let rangeArr = [1, 4, 11, 2, 37, -4]

//for loop

for (let i = 0; i < rangeArr.length; i++) {

} // while i is less than 6