import React from "react";
import { Header, CatMedia, CatFacts, Button } from "./components";
import { useApp } from "./hooks/useApp";


export function App() {

    const{fact, img, isLoading, words, error, handleOnClick} = useApp()

    console.log(fact);
    console.log(img);
    console.log(words);

    if(isLoading) {
        return(
            <>
            <Header/>
            <p> You´re fact is loading</p>
            </>
        )
    }

    if (error){
        return(
            <p>{error}</p>
        )
    }

    return(
        <>
        <Header/>
        <main>
          <CatMedia
          media={img}/>
          <CatFacts 
          text={fact}/>
          <Button onClick={handleOnClick}/>
         </main>
        </>

    )
}


