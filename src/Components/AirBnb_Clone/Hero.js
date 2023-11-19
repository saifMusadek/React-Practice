import React from "react";
import imageGrid from "./images/AirBnbImageGrid_2.jpg"
import "./styles/style.css"

export default function Hero(){
    return(
        <section className="hero">
            <img src={imageGrid}
            alt="AirBnbImageGrid"
            className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one of a kind hosts-all without leaving the room</p>
        </section>
    )
}