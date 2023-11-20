import React from "react"
import "./Circle.css"
export default function Circle(){


    let [count,setResponse] = React.useState(0)
    function handleClick(){
        setResponse("Not Allowed!!")
    }
   
    function onPlus(){
        setResponse(function(oldValue){
            return oldValue+1
        })
    }

    function onMinus(){
        count = count-1
        setResponse(count)
    }




    return(
        <body>
        <div className="container">
      
          <button className="circle" onClick={handleClick}>{count}</button>
              <div className="buttons">
          <button className="plus" onClick={onPlus}>+</button>
          <button className="minus" onClick={onMinus}>-</button>
        </div>
      </div>
      </body>
    )
}