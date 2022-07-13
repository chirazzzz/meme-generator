import React, { useState } from "react";
import memeData from "../memesData";

const Meme = () => {
  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData)

  function getMemeImage() {
    const memeArr = allMemeImages.data.memes;
    const randomMeme = Math.floor(Math.random() * memeArr.length);
    const url = memeArr[randomMeme].url;

    setMeme(prevMeme => {
        return {
            ...prevMeme,
            randomImage: url
        }
    });
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
        <button onClick={getMemeImage} className="form--button" type="submit">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="Random meme" className="meme--image" />
    </main>
  );
};

export default Meme;
