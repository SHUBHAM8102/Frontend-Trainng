// console.log("Hello");

// variables in javascript
// var, let, const

// var is function scoped and can be re-declared and updated    
//let is block scoped and can be updated but cannot be re-declared
// const is block scoped and cannot be updated or re-declared

// var a= 10;  -- declaration and initialization of variable a

// let b = 20;

// const c = 30; 



// declaration and initialization of variables

// -- var --var is function scoped and can be re-declared and updated
// var x; // declaration in different line is possible with var
// x = 10; // initialization in different lines
// console.log(x);

// x= 20; // updating the value of  x or reinitiqlization of x
// console.log(x);

// var x = 30; // re-declaration of x is possible with var
// console.log(x);



// -- let -- let is block scoped and can be updated but cannot be re-declared
// let y;  // declaration in different line is possible with let
// y = 10; // initialization in different lines
// console.log(y);

// y = 20; // updating the value of y or reinitialization of y
// console.log(y);

// let y = 30; // re-declaration of y is not possible with let
// console.log(y);  


// -- const -- const is block scoped and cannot be updated or re-declared
// // const z; // declaration of z is not possible without initialization with const
// const z = 10; // declaration and initialization of z is possible in the same line with const
// console.log(z);
// z = 20; // updating the value of z is not possible with const
// console.log(z);  
// const z = 30; // re-declaration of z is not possible with const
// console.log(z);



// difference between var, let and const according to scope

// {
//     var a=10
// } 
// console.log(a); 

// let b=20;
// {
//     console.log(b); // b is accessible here because it is declared with let and has block scope
// }
// function add(){
//     var a = 10;
// }
// add();
//  console.log(a); // a is not accessible here because it is declared with var and has function scope   


//  Data types in javascript
// 1. Primitive data types
// a. String
// b. Number
// c. Boolean
// d. Null
// e. Undefined
// f. Symbol
// 2. Non-primitive data types
// a. Object
// b. Array
// c. Function

// **Number
// let num1 = 10;

// **String
// let userName = 'Siddhant';

// const college="LPU";

// let details=`I am ${userName} and I am studying in ${college}`; // template literals or template strings
// //string interpolation
// //string inter polation is the process of embedding expressions within string literals, allowing you to create dynamic strings by including variables or expressions directly within the string. In JavaScript, this is achieved using template literals, which are enclosed in backticks (`) and allow for the use of placeholders (${expression}) to embed variables or expressions.

// console.log(details);

// let details = "I am from 'LPU' punjab";
// console.log(details);
// let detail = 'I am from "LPU" punjab';
// console.log(detail);

// // **boolean  // boolean is a primitive data type in javascript which can have only two values true or false. It is used to represent the truth value of an expression or a condition. In JavaScript, boolean values are often used in control flow statements such as if-else, while loops, and for loops to determine the flow of execution based on certain conditions. Boolean values can also be the result of comparison operators (e.g., ==, ===, >, <) and logical operators (e.g., &&, ||, !).
// let ismarried=true;

// console.log(ismarried);
// console.log(typeof ismarried);

// // **undefined
// let a;  // undefined is a primitive data type in javascript which represents the absence of a value or the uninitialized state of a variable. When a variable is declared but not assigned a value, it is automatically assigned the value of undefined. It is important to note that undefined is different from null; undefined indicates that a variable has been declared but has not been assigned a value, while null represents the intentional absence of any object value. In JavaScript, undefined is a falsy value, meaning it evaluates to false in boolean contexts.
// console.log(a);
// console.log(typeof a);


// // **null
// let b = null; // null is a primitive data type in javascript which represents the absence of any value or object. It is often used to indicate that a variable has no value or that an object reference is intentionally empty. In JavaScript, null is a falsy value, meaning it evaluates to false in boolean contexts. However, it is important to note that null is not the same as undefined; null is an assigned value that represents no value, while undefined indicates that a variable has been declared but has not been assigned a value.
// console.log(b);
// console.log(typeof b); // typeof null is object in javascript which is a bug in javascript but it is not fixed because it is a legacy code and it will break the existing code if it is fixed


// // bigInt
// let salary = 1234567890123456787778988998n; // bigInt is a new data type in javascript which is used to represent large integers that are beyond the range of the Number data type. It is denoted by appending 'n' at the end of the integer literal. BigInt can handle integers of arbitrary size, allowing you to work with numbers that exceed the limits of the Number type, which is typically 2^53 - 1 for positive integers and -(2^53 - 1) for negative integers.
// console.log(salary);
// console.log(typeof salary);


// // symbol
// // let sym1 = Symbol("id"); // symbol is a new data type in javascript which is used to create unique identifiers for objects. It is denoted by the Symbol() function, which takes an optional description as an argument. Each time you call Symbol(), it returns a unique symbol value, even if the description is the same. Symbols are often used as keys in objects to avoid name collisions and to create private properties that cannot be accessed or modified from outside the object.
// // let sym2 = Symbol("id"); 
// console.log(sym1);
// console.log(sym2);
// console.log(sym1 === sym2); // false because sym1 and sym2 are unique symbols even though they have the same description

// // // **Array
// let arr = [1, 'Siddhant', true, 4, 5]; // array is a non-primitive data type in javascript which is used to store multiple values in a single variable. It is denoted by square brackets [] and can contain elements of any data type, including other arrays. Arrays are ordered collections of values, and each value is accessed using its index, which starts from 0. JavaScript provides various methods to manipulate arrays, such as push(), pop(), shift(), unshift(), splice(), slice(), and many more.
// console.log(arr);
// console.log(typeof arr); // typeof array is object in javascript because arrays are a type of object in javascript   


// // **Object
// let person = { // object is a non-primitive data type in javascript which is used to store multiple values in a single variable. It is denoted by curly braces {} and consists of key-value pairs, where each key is a string (or symbol) and the value can be of any data type, including other objects. Objects are unordered collections of properties, and each property can be accessed using its key. JavaScript provides various methods to manipulate objects, such as Object.keys(), Object.values(), Object.entries(), and many more.
//     name: 'Siddhant',
//     age: 21,
//     isStudent: true
// };
// console.log(person);
// console.log(typeof person); // typeof object is object in javascript because objects are a type of object in javascript

// // **Function
// function add(a, b) { // function is a non-primitive data type in javascript which is used to perform a specific task. It is denoted by the function keyword followed by the function name and parentheses (). Functions can take parameters (input) and return a value (output). In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions. Functions can be defined using function declarations, function expressions, or arrow functions.
//     return a + b;
// }
// console.log(add(10, 20)); // 30
// console.log(typeof add); // typeof function is function in javascript because functions are a type of object in javascript but it is not considered as an object in javascript because it has its own properties and methods that are different from other objects


// // operators in javascript
// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators
// 5. Bitwise operators
// 6. Ternary operator  

// let a = 10;
// let b = 20;
// let res= a + b; // addition operator
// console.log(res);
// res = a - b; // subtraction operator
// console.log(res);
// res = a * b;  // multiplication operator
// console.log(res);
// res = a / b;   // division operator
// console.log(res);
// res = a % b; // modulus operator
// console.log(res);
// res = a ** b; // exponentiation operator
// console.log(res);


// let a=10;
// let b='10';
// console.log(a==b); // true because == operator only compares the values and not the data types
// console.log(a===b); // false because === operator compares both the values and the data types    


// from here go to the String.js file to see the recently edited code.