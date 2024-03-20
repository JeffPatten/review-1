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
let arr = []
let obj = {}

if () {}
for () {}
function func (parameters) {} // creating the function. Parameters are placeholders for the arguments you will use
func(arguments) // running the function. arguments are the actual data you want to use when you run the function
func(arguments2)


function inception () {
    if (){
        // if statement code
        for () {
            //for loop code runs
            if () {
                // if statement code
            }
        }
    } else if () {
        if () {
            for() {
                
            }
        }
    }
}

// [5, 6, 3, 1, 2, 3, 4, 5, 6, 7] => '(563) 123 - 4567'
// phoneFormatter([5, 6, 3, 1, 2, 3, 4, 5, 6, 7])
// phoneFormatter([your number])
// phoneFormatter([my number])
// phoneFormatter([alecs number])