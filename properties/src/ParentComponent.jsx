import React from "react";

import ChildComponents from "./ChildComponents";

const ParentComponent=()=>{
    let profile="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    let name="ReactJS";
    let marks=100;
    let skills=["HTML","CSS","JS","ReactJS"];
    return(
        <div>
            <h1>Parent Component</h1>
            <p>this is a parent components</p>
            <ChildComponents uname={name} umarks={marks} uprofile={profile} skills={skills} />

        </div>
    )
}

export default ParentComponent;