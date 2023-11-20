import React from "react"
import "./styles.css"
import memesData from "./memesData"


export default function Inputs(){
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() *memesArray.length)
    const url = memesArray[randomNumber].url
    setMemeImage(url)
}
    return(<main className="inputs">
        <div className="form">
        <input className="form--input" placeholder="top-text"></input>
        <input className="form--input" placeholder="bottom-text"></input>
        <button type="submit" className="form--button" onClick={getMemeImage}>Got a new meme img</button>
        </div>  
        <img src={memeImage} className="meme--img"/>
    </main>)

}