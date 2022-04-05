import { useState } from "react";
import memesData from "../memesData"

export default function Meme() {
    function getMemeImage() {
        const memeArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomIndex].url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/6al5hc.jpg",
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    return (
        <main>
            <form className="meme-form">
                <input 
                    type="text"
                    placeholder="top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="bottom text"
                    className="form-input"
                />
                <button onClick={getMemeImage} type="button" className="form-button">Get a new meme image</button>
            </form>
            <img className="meme-preview" src={meme.randomImage} alt="random meme" />
        </main>
    )
}
