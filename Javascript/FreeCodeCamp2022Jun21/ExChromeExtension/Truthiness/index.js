const credits = 0;

if (credits){
    // If credits is not 0
    console.log("Let's play");
} else {
    // If credits is 0
    console.log("Sorry, you have no credits");
}

// truthy value


// falsy value
// 0
// ""
// null       (primitive data type, how you as developer signalize emptiness)
// undefined  (primitive data type, how Javascript signalizes emptiness)
// NaN

let currentViewers = null;
currentViewers = ["jane", "nick"]

if(currentViewers){
    // Do something, e.g. notify live streamers
    console.log("we have viewers");
}

let someVarNotDefined;
let someVarNull = null;
console.log(someVarNotDefined); // undefined
console.log(someVarNull); // null

// Testing truthiness
let trueOrFalse = Boolean("hello");

console.log(trueOrFalse);

// Practice
console.log( Boolean("") ) // False
console.log( Boolean("0") ) // True
console.log( Boolean(100) ) // True
console.log( Boolean(null) ) // False
console.log( Boolean([0,]) ) // True (array with number zero)
console.log( Boolean(-0) ) // False
