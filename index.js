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

    
// var vs let vs const
/*
var age_2 = 10;
var age_2 = 20;
console.log(age_2);
*/

/*let age_2 = 10;
age_2 = 20;*/

/**
    const age_2 = 10;
    age_2 = 20;
 */

// Scope of var, let and const
/*
var age_2 = 10;
if (true) {
    var age_2 = 20;
    console.log(age_2);
}
console.log(age_2);*/

/*
let age_2 = 10;
if (true) {
    let age_2 = 20;
    console.log(age_2);
}
console.log(age_2);*/

/*
const age_2 = 10;
if (true) {
    const age_2 = 20;
    console.log(age_2);
}
console.log(age_2);*/


// Arrays
/*
let ages = [10,20,30];
ages = [20,40,50];
ages.push(70)
console.log(ages);
*/
/*
const ages = [10,20,30];
ages.push(70)
console.log(ages);
*/

/*
const persona = {
    name: "Camilo",
    lastName: "Puello",
    age:24
}

persona.name = "Luis"
console.log(persona);*/

// Functions
/*
function to_sum (num_one, num_two){
    console.log(num_one+num_two);
}
to_sum(4,5);*/

// Arrow function

const to_sum = (num_one,name_two) => {
        console.log(num_one + name_two);
}
to_sum(4,5);

const greet = () => {
    console.log("Hello world");
}

const square = base => {
    console.log(base ** square);
}

const sum_two = (num_one,name_two) => {
    return num_one,name_two;
}
console.log(sum_two(2,5));

const sum_three = (num_one,name_two) => num_one + name_two;
console.log(sum_three(2,5));



// Template String

// backtick
const sqr = (base, exponent) => `The result is: ${base**exponent}`
console.log(sqr(2,2));

// destructuring objects

const pet={
    name:'Tom',
    age:5,
    live:true,
    races:['Pastor Alemán','Pitbull']
}

console.log(pet.name);


const data = [
    {
        title:'Learning Javascript',
        year: '2021',
        isbn: '994-223-4527',
        author: 'Luis Puello'
    },
    {
        title:'Learning Python',
        year: '2018',
        isbn: '994-555-4527',
        author: 'Luis Puello'
    },
    {
        title:'Learning Ruby',
        year: '2019',
        isbn: '994-223-3333',
        author: 'Luis Puello'
    },
];
/*
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000)
    })
}*/

//const getData = () => data;
/*
const getData = () => {
    setTimeout(()=>{
        return data;
    }, 1000);
}
*/

/*dato = getData();
console.log(dato);*/

//getData().then((response) => console.log(response));


// Async And Await (syntactic sugar)
/*
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000)
    })
}

async function get_information(){
    const books = await getData();
    console.log(books);
}

get_information();*/

/*
const getCharacter = async () => {
    try{
        const answer = await fetch("https://rickandmortyapi.com/api/character");
        const data = await answer.json();
        const result = data.results;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

getCharacter();
*/
