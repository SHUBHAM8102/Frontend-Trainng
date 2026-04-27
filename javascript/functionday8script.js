// ----named function

// function add(){ 
//     console.log(10+20);

// }
// add(); // calling the function

// // ----! function with parameters
// function add1(a,b){ // a and b are parameters of the function
//     console.log(a+b);
// }
// add1(10,20); // 10 and 20 are arguments of the function

// //// we cannot create function with same name in javascript because it will give an error but we can create function with same name in different scope in javascript because it will not give an error

// function add2(a=10,b=20){ // a and b are parameters of the function with default values
//     console.log(a+b);
// }
// add2(50,100)

// anonymous function / unnamed function
// anonymous function is a function that does not have a name and is often used as a callback function or an immediately invoked function expression (IIFE). It can be assigned to a variable or passed as an argument to another function. Anonymous functions are useful for situations where you need to define a function on the fly without the need for a named reference.
// (function (a,b){ // this is an anonymous function because it does not have a name
//     console.log(a+b);
// }(20,30));

// -- IIFE (Immediately Invoked Function Expression)
// IIFE is a function that is executed immediately after it is defined. It is often used to create a new scope and avoid polluting the global scope. IIFE can be defined using function expression or arrow function syntax.
// (function(a,b){ // this is an IIFE because it is executed immediately after it is defined
//     console.log(a+b);
// })(20,30);

// // function expression (storing a function in a variable)
// const mul= function(a,b){
//     console.log(a*b);
// };
// mul(10,20);

// -- higher order function and callback function
// higher order function is a function that takes another function as an argument or returns a function as a result. It is often used to create reusable code and to implement functional programming concepts in JavaScript. Higher order functions can be used for various purposes, such as event handling, array manipulation, and asynchronous programming.
// call back function is a function that is passed as an argument to another function and is executed after the completion of the parent function. It is often used in asynchronous programming to handle the result of an asynchronous operation, such as a network request or a timer. Callback functions can be defined using function expressions or arrow functions.
function hof(name,clb){ // hof is a higher order function because it takes a callback function as an argument
    console.log(name);
    clb(); // calling the callback function
    // console.log(clb());
    
}
function clback(){ // clback is a callback function because it is passed as an argument to the higher order function
    console.log("This is a callback function");
    // return "This is a callback function";
}
hof("Siddhant",clback); // calling the higher order function and passing the callback function as an argument
// clback();


// -- Arrow function
// it is shorter way to  create a function
// no need to use function keyword


// let mul=(a,b)=>{
//     console.log(a*b);
// }
// mul(20,5);


// -- if arrow function is accepting only 1 parameter no need to write parenthesis;
// -- if arrow function contain only 1 statment inside we can skip curly braces
// then only arrow function can ret
// let mult=a=>console.log(a*a);
// mult(10);


// -- explicit return 
// function add(a,b){
//     // return a+b;
//     console.log(a+b);  // console.log()
// }
// let res =add(10,20);
// console.log(res);

// console.log(add(40,60));

// -- implicit function (its only availablre for arrow function)

// let mul=(a,b)=>a*b;
// let res=mul(21,7);
// console.log(res);

// -- nested function
// function parent(name,city){
//     console.log(name);

//     function  child(){
//         console.log(city);
//     }
//     child();
// }
// parent('siddhant','banglore')

//-- 

// console.log('start');
// function parent(name,city){
//     console.log(name);

//     function  child(){
//         console.log(city);
//     }
//     child();
// }
// parent('siddhant','banglore')
// console.log('end');


//-- function currying


// function outer(a){
//     let name='siddhant';

//     return function inner(b){
//         console.log(name);

//         return function innerMost(c){
//             console.log('i am innerMost function');
//             console.log(a+b+c);
//         }
//     }
// }
// outer(10)(20)(30)


//--  currying in arrow function

let mult=a=>b=>c=>a*b*c;
let multi=mult(10)(20)(3)
console.log(multi)



