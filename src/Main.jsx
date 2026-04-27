// import App from "./App";

// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById('root')).render(
//     <App/>
// )

import React from "react";

const Main = () => {
  const mainStyle = {
    padding: "20px",
    textAlign: "center"
  };

  return (
    <div style={mainStyle}>
      <h1>Welcome to My Website</h1>
      <p>This is a simple React app with Navbar, Main and Footer.</p>
      <p>We are using inline CSS for styling.</p>
    </div>
  );
};

export default Main;