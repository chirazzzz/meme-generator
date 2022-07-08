import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + "images/troll-face.png"}
        className="header--image"
        alt="Troll face logo"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
};

export default Header;
