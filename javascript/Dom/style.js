// !------- DOM (Document Object Model)


// !----- document.getElementbyid

// let h1= document.getElementById("head1");
// console.log(h1)


//  !------  document.getElementsByClassName

// let para=document.getElementsByClassName("para")
// console.log(para)



// !-----document.getElementsByTagName

// let p=document.getElementsByTagName('div')
// console.log(p)


// !-----document.getElementsByName()

// let heading=document.getElementsByName('heading');
// console.log(heading)

//  !-----document.querySelector()

// let para=document.querySelector(".para")
// console.log(para)

//  ----- document.querySelectorAll

// let para=document.querySelectorAll(".para")
// console.log(para)


// !----- creating the element 

let div=document.createElement('div')

console.log(div)

// div.innerHTML='<h1>Hello Everyone </h1>'

 div.innerText='<h2>Good Afternoon .....</h2>'

let body=document.body;
body.append(div)