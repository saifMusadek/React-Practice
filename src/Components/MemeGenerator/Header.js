import React from "react";
import "./styles.css"

export default function Header(){
    return(
    
    <header className="header">
        <img src="./images_meme-generator/trollface.png" className="header--img"/>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
    </header>)
}