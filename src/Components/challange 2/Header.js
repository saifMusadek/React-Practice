import React from "react";
import "./style1.css"
function Header(){
return(
    <div>
        <nav className="nav">
            <img src="/images/react-logo.png" className="nav-logo" alt="React Logo" />
            <div className="nav-text">
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1 </h4>
            </div>
        </nav>
    </div>
)
}

export default Header