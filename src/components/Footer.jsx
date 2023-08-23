import React from "react";

export function Footer(){

    const footerStyle = {
        display:"flex",
        justifyContent: "space-between",
        padding: "0 0.8rem",
        height: "18vh",
        alignItems: "center",
        color: "#696969",
    }


    return(
        <>
    
        <footer style= {footerStyle}>
        <p>Rossy Hurtado</p>
        <p>All right reserverd ®</p>
        </footer>
     
        </>

    )
}