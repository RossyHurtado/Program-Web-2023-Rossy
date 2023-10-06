import React from "react";
import "./catmedia.css";

export function CatMedia({media}) {
   
    return(
      <>
         
         <div className="card">

           <div className="img-container">
            <img className="cat-size" src={media} alt="Cat-image"/>

            </div>
        </div>

        </>  
    )
    
}