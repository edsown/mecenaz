import React from "react";

function Navbar() {
  return (
    <div className="NavContainer">
      <div className="Logo">
        <img className="logoImg" src="./images/logo.png"></img>
        <h2>
          Mecena<>&#437;</>
        </h2>
      </div>
      <div className="NavLinks">
        <ul>
          <li>Sobre</li>
          <li className="artistButton">Artistas</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
