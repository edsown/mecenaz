import React from "react";

function Navbar() {
  return (
    <div className="NavContainer">
      <div onClick={() => window.location.replace("/#")} className="Logo">
        <img className="logoImg" src="./images/logo.png"></img>
        <h2>
          Mecena<>&#437;</>
        </h2>
      </div>
      <div className="NavLinks">
        <ul>
          <li onClick={() => window.location.replace("/#aboutContainer")}>
            <p className="aboutLink">Sobre</p>
          </li>
          <li
            onClick={() => window.location.replace("/#artistSection")}
            className="artistButton"
          >
            Artistas
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
