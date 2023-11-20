import React from "react";
import AirBnbLogo from "./images/AirBnbLogo.png"
import "./styles/style.css"

export default function Navbar(){
    return(
    <nav>
        <img src={AirBnbLogo}
        className="nav-logo"
        alt="AirBnbLogo"
        />
    </nav>)
}