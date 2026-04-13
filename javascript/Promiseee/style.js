
//-Promise

//-promise is an object 
    // which represent eventual completion or failure of an asynchronuse task

//-3 states in promise
    // pending
    // fullfilled
    // rejected


    let myPromise = new Promise((res,rej)=>{
        let boolean = true;
        if(boolean){
            res("entred into resolved block");
        }
        else{
            rej('Entered into rejected block');
        }
    })
    console.log(myPromise);

    myPromise.then((t)=> console.log(t)).catch((t)=>console.log(t)).finally(()=>console.log("Finally executed"));
    