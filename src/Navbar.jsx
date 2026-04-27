// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       Navbar
//     </div>
//   )
// }

// export default Navbar


import React from "react";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-around"
  };

  return (
    <div style={navStyle}>
      <h3>MyApp</h3>
      <div>
        <span style={{ margin: "10px" }}>Home</span>
        <span style={{ margin: "10px" }}>About</span>
        <span style={{ margin: "10px" }}>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;