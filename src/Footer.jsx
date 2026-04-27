// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       Footer
//     </div>
//   )
// }

// export default Footer



import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%"
  };

  return (
    <div style={footerStyle}>
      <p>© 2026 MyApp. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;