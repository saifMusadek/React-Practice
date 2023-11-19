import React from "react";
import "../style.css"
function Header(){
    return(
    <div>
        <header>
            <nav className="nav">
            <img src="/images/react-logo.png" className="nav-logo" alt="React Logo" />

                
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    </div>
    
    )
    
}

export default Header; 
