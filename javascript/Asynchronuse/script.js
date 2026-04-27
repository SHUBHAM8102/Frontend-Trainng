
    // --set timeout-------execute once
// console.log("start");

// setTimeout(()=>{
//     console.log("Hello");
// },3000);
// console.log("End");

// -----set Interval----
// console.log("Start");

// setInterval(()=>{
//     console.log("Hello");
// },2000);

// console.log("End");

// ----Clear interval
// let greet = setInterval(()=>{
//     console.log("Hello");
// },1000)

// setTimeout(()=>{
//     clearInterval(greet);
// },5000);


    // async adn await
//    async function getData(){
//     let responce = await fetch("http://fakestoreapi.com/products");
//     console.log(responce);

//     let data = await responce.json()
//     console.log(data);

//     console.log(data[3]);
//     console.log(data[3].category);
//     console.log(data[3]["title"]);
    
//    }

//    getData();


// --------JSON----------
    // data types not allowed in json-----undefined,function,bigInt
    // JSON.stringify()----Js object to JSON
    // JSON.parse()------JSON to Js object
let person = {
    userName:"Cat",
    age: 10,
    isMarried:false,
    skills:["JS","TypeScript","ReactJS"],
    greet:function(){
        console.log("Hello Everyone");
    },
    address:{
        pin:4000,
        country:"India"
    },
    kids:undefined,
    ex:null,
    salary:890989080
};
console.log(person);

let res = JSON.stringify(person);
console.log(res);

let final = JSON.parse(res);
console.log(final);




