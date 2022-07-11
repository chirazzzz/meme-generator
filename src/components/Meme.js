import React from "react";

const Meme = () => {
  return (
    <main>
      <form className="form">
        <input
          id="first-line"
          className="form--input"
          type="text"
          placeholder="Top text"
          name="firstLine"
        />
        <input
          id="second-line"
          className="form--input"
          type="text"
          placeholder="Bottom text"
          name="secondLine"
        />
        <button className="form--button" type="submit">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
};

export default Meme;
