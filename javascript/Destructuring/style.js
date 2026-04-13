// ------------Array Destructuring
// let marks = [10,20,30,40];
// console.log(marks[2]);

// let [a,b,c]=marks;
// console.log(b);

// let [x,,z]=marks;
// console.log(x);
// console.log(z);

// --------Objext destructuring
    // Extracting the properties from an object and storing inside a variable
    // we need to give same name for variable which we used in object properties
// let person={
//     name:"Cat",
//     city:"Hyd"
// }
// let {name,city}=person;
// console.log(name);
// console.log(city);


//------------spread in function--
let marks = [10,20,30,40,50,60,70,80];
function add(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f);
}
add(...marks)




