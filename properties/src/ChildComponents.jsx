// import React from "react";


// const ChildComponents=(pro)=>{
//     console.log(pro);
//     console.log(pro.uname);
//     let uname=pro.uname;
    

//     return(
//         <div>
//             <h1>Child Component</h1>
//             <h2>{uname}</h2>
//         </div>
//     )
// }

// export default ChildComponents;




import React from "react";


const ChildComponents=(pro)=>{
    console.log(pro);
    console.log(pro.uname);
    let {uname,marks,skills,uprofile}=pro;
    console.log(skills);
    

    return(
        <div>
            <h1>Child Component</h1>
            <h2>{uname}</h2>
            <h3>{marks}</h3>
            <img src={uprofile} alt="" />
            {
                skills.map((sk,i)=>(
                    <li key={i}>{sk}</li>
                ))
            }
        
        
        </div>
    )
}


export default ChildComponents;