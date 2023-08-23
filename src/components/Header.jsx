import React from "react"
export function Header(){

     const componentStyle= {
       display : "flex",
       padding: "1rem",
       margin: "0 auto",
       textalign: "center",
       maxHeight: "40px",
       color: "#696969",
     }

     return(

        <>
        <header style={componentStyle}>
        <h2>Counter</h2>
        </header> 
        </>

     )


}