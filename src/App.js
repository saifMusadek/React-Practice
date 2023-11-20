import React from "react"

//air bnb
import Navbar from "./Components/AirBnb_Clone/Navbar"
import Hero from "./Components/AirBnb_Clone/Hero"
import Card from "./Components/AirBnb_Clone/Card"
import "./Components/AirBnb_Clone/styles/style.css"
import cardData from "./data"


//meme generator
import Header from "./Components/MemeGenerator/Header"
import Inputs from "./Components/MemeGenerator/Inputs"

function App(){

    // //AirBnb Clone
    // const cards = cardData.map((items)=>{
    //     return (
    //         <Card
    //         rating = {items.rating}
    //         point = {items.stats.rating}
    //         country = {items.location}
    //         description = {items.description}
    //         price = {items.price}
    //         starImg = {items.starImage}
    //         cardPerson = {items.coverImg}

    //         />
    //     )
    // })

    // return(
    //     <div>
            


    //         <Navbar/>
    //         <Hero/>
    //         <section className="cards-list">
    //             {cards}
    //         </section>
    //     </div>
    // )


//Meme Generator
return(
    <div>
        
        <Header/>
        <Inputs/>
    </div>
)
}
export default App;