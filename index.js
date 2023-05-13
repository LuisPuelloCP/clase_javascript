//Hello world
//alert("Hello world")

//Line comments
/*
    First comment
    Second comment
    Third comment
*/

//Statements
/*alert("Hello")
alert("World!")*/


// Variables
let a = 5;
let b = 6;

let sum = a + b;

//console.log("The total sum is: ", sum);

let name = "Luis";
let name_two = "Camilo";

//console.log("The first name is: ", name);
//console.log("The second name is: ", name_two);

// Variables Notations

let camelCase = 5;
let snake_case = 5;
let Pascal_Case = 5;

let full_name = "Luis Camilo";

/* 
    Can't not start with number
    Can not 
*/

// Constants

const PI = 3.1416;
const COLOR = "Red";


// Data types

// Data Type -> Numbers

let number = 123;
//console.log(number)

// Numerical Special Values -> Infinity and NaN

//console.log(1/0)

// NaN represent a calculation error

//console.log("text" / 2);

// String Type

let text_simple_quotes = 'a';
let text_double_quotes = "a";
let text_backtick = `a`

//console.log('Luis Camilo alias "Puello"');
//console.log("I can do it");
//console.log(`Hello world`);

//console.log(`Hola ${full_name}`);

// Boolean type
// true or false

let value_true = true;
let value_false = false;
let higher = 4 > 5;

// Null value
// Special value that does not belong to any previous data type
// In JS, Null isn't mean a special objet
// In JS, Null is a special value that means any, empty or unknown

let age = null;
//console.log(age);

//Undefined type

let value_not_assigned;
//console.log(value_not_assigned);

// Operator typeof or typeof function
// return data type

console.log(typeof(undefined)); // undefined
console.log(typeof(0)); // number
console.log(typeof(true)); // boolean
console.log(typeof(3.1416)); // number
console.log(typeof("Hello world!")); // String
console.log(typeof(alert)) //function
console.log(typeof(null)); // Object - Javascript Error


//  Type conversion

// Convert to String

let value = true;
value = String(value);
value = String(false);
value = String(null);
value = String(undefined);

// Convert to number
// Numeric conversions happen automatically in math functions and expressions

console.log('6' / '2'); // 3
console.log(1 + '2'); // '12' + is a concatenation
console.log('1' + 2); // '12' is a concatenation

value = Number(undefined); // NaN
value = Number(null); // 0
value = Number(true); // 1
value = Number(false); // 0
value = Number(''); // 0
value = Number('Hello World'); // NaN
console.log(value);

// Convert to Boolean
value = Boolean(undefined); // false
value = Boolean(null); // false
value = Boolean(''); // false
value = Boolean(NaN); // false
value = Boolean(0); // false
value = Boolean('0'); // true
console.log(value);



//Comparisons between different types
console.log('2' > 1); // true
console.log('01' == 1); // true
console.log(true > 0 ); // true
console.log(false > 0); // false
console.log('hello' > 1); // false
console.log(null == undefined); // true Javascript error
console.log(0 == false); // true
console.log('0' == false); // true



// statement if

/*
if (condition){

}else if (condition){

}else{

}
*/


// statement line if

// if (condition) console.log('Message')

// ternary operator
// condition ? expected operation : false operation


total = 4 > 5 ? 'Is true': 'Is False';
console.log(total);


// while
/*
    while(condition){

    } 
*/

// Do While

/** 
    do{

    }while(condition)
*/

// FOR

/**
    for(start; stop condition; increment){

    }
 */

// switch

/**
    switch(value){
        case value1:
            break;
        case value2:
            break;
        default:
            break;
    }
 */

    