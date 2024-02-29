                                                               // Variables
//declarations/declaring variables
let aVariable      // let's you reassign a value
const aVariable2 = 'a value'  // constant value - must give it a value

//reassign a value

aVariable = 10
// aVariable2 = 12    const variables cannot be reassigned a value

// Variables are like a file cabinet drawer that you have labeled. When you want to use what is in that drawer you use a label. 


                                                              //Data types or values

// string, number, boolean(true or false), undefined, null
// arrays, objects


                           //Arrays - collection of data. Usually, a collection of like data, ex, people, favorite foods, prices

     let varName = ['hello', 12, true, [], {}, undefined, null] //can contain any data type. An ordered list of data
// index/position      0     1     2   3   4    5          6
// length              1     2    3    4   5    6          7

//accessing values - like an address street[house number]
     varName[0]  //  returns 'hello'
     varName[2]  // returns true

// properties - information about the array, methods - functions that we can run on the array
     varName.length // property - 7
     varName.pop() .push('howdy') // drops the last item in the array / add's an item to the end of the array

                                                     // Objects - collection of data, with key value pairs. The keys describe what the values are. (ex firstName: 'Jeff')
     let person = {
          firstName: 'Jeff',           //left side is key, right side is value
          lastName: 'Patten',
          favColor: 'blue?'
     }