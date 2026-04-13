////  !-- async & await

// async function getData() {
//     let resp=await fetch("https://fakestoreapi.com/products")
//     console.log(resp);

//     let data =await resp.json();
//     console.log(data)


//     console.log(data[1]);
//     console.log(data[3].category);
//     console.log(data[3]['title'])
    
// }
// getData()

//  !----- JSON   function,undefined, BigInt are not allowed in JSON format
// JSON (javascript object notation) 
// datatype is not allowed in json----> unsefined,bigInt,function
// JSON stringify()   js object --> JSON
// JSON parse()  js Object -->JSON

// let person={
//     username:'siddhant',
//     age:22,
//     isMarried:false,
//     skills:['js','ts','reactjs'],
//     greet:function(){
//         console.log("hello everyone");

//     },
//     address:{
//         pin:233222,
//         country: 'India'
//     },
//     kids:undefined,
//     ex:null,
//     // salary:9900n
// }
// console.log(person);

// let res=JSON.stringify(person);
// console.log(res);

// console.log(typeof res)

// let final=JSON.parse(res);
// console.log(final)


// BOM ( Browser Object Model)

// console.log(window);

// var a=10;

// let aa=20;

// var aab=10;

// console.log(a);


///// ! -- prompt

// to take input from user
// let data=prompt("Enter username: ")
// console.log(data)      // any input is a type of string
// console.log(typeof data)

// let res=Number(data)
// console.log(typeof res);

// ! -- alert

// window.alert('data submited')

// ! -- confirm

// window.confirm('are you sure')