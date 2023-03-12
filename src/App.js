import "./App.css";
import React from "react";
import Earth from "./Asset/Earth.jpg";
import HomePage from "./component/HomePage";
import Content from "./component/Content";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="stylebg" style={{ backgroundImage: `url(${Earth})` }}>
      <HomePage />
      <Content />
      <Contact />
    </div>
  );
}

export default App;
