import React from "react";
import "./styles/style.css"
import starImage from "./images/star.png"
import person from "./images/katie-zaferes.png"
export default function Card({rating,point,country,description, price,starImg,cardPerson}){
    return(
    <div className="card">
        <img
        src={person}
        alt="image"
        className="card--image"
        />
        <div className="card--stats">
            <img src={starImage}
            alt="star"
            className="star--image"
            />
            <span className="grey">{rating} </span>
            <span className="grey"> ({point}) · </span>
            <span className="grey">{country}</span>
        </div>
        <p className="card--title">{description}</p>
        <p className="card--price"><span className="bold">{price}</span> / person</p>
    </div>)
}