import React from "react";
import logo from "../../../public/reindeer.png";
import "@pages/newtab/Newtab.css";
import "@pages/newtab/Newtab.scss";

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          REACT VITE
        </p>
        <h6>TEST</h6>
      </header>
    </div>
  );
};

export default Newtab;
