import React, { useState } from "react";
import memeData from "../memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState('')
  
  function getMeme() {
    const arr = memeData.data.memes;
    const randomMeme = Math.floor(Math.random() * arr.length);

    const meme = arr[randomMeme].url;
    setMemeImage(meme)
  }

  return (
    <main>
      <div className="form">
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
        <button onClick={getMeme} className="form--button" type="submit">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt="Random meme" className="meme--image"/>
    </main>
  );
};

export default Meme;
