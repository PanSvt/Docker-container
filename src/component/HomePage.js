import React from "react";

function HomePage() {
  const handleClick = () => {
    window.location.href = "https://www.gec.co.th/";
  };
  return (
    <div className="App">
      <div className="flex-container">
        <h1 className="textcol">Welcome to Operation Team </h1>
        <div className="flex-row">
          <h2 className="textcol"> Information of my company</h2>
          <button className="button1" onClick={handleClick}>
            <div class="button">
              <div class="box">C</div>
              <div class="box">L</div>
              <div class="box">I</div>
              <div class="box">C</div>
              <div class="box">K</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
