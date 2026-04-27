//!---Array

// // let subject=['java','python','c++',100.87,97];
// console.log(subject);

// console.log(subject[2]);
// subject[4]=500;
// console.log(subject);

// //!-- property (length)

// console.log(subject.length);

// !--method (push)
// let marks=[100,90,80,70];
// console.log(marks);
// //!---push
// marks.push(60);
// console.log(marks);

// //!---pop
// marks.pop();
// console.log(marks);

// //!--unshift
// marks.unshift(110);
// console.log(marks);

// //!---shift
// marks.shift();
// console.log(marks);


//!--

// let msrks=[100,90,80,70];
// console.log(msrks);

// let part1=msrks.slice(1,3);
// console.log(part1);


//!---splice
// let marks=[100,90,80,70];
// console.log(marks);

// let final=marks.slice(1,3,4,5,6,7,8,9);
// console.log(final);

// console.log(marks);

//!---concat
// let students=['shubham','satyarth','satyam'];

// let marks=[100,90,80];

// let allData=students.concat(marks);
// console.log(allData);

//!-- reverse() & join()

// let userName='shubham';
// console.log(userName);
// let res=userName.split('').reverse().join('');
// console.log(res);

//!--map

// let marks=[100,90,80,70];
// console.log(marks);

// marks.map(m=>{console.log(m+10)});
// console.log(marks);

//!---filter

// let marks=[100,90,80,70,45,33];
// console.log(marks);
// let topper=marks.filter(a=>a>=70);
// console.log(topper);


// !---reduce

let marks=[100,90,80,70];

let totalmarks=marks.reduce((acc,cur)=>{
return acc+cur;
},0);
console.log(totalmarks);