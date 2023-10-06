import { useEffect, useState } from "react";
import { fetchFacts } from "../services/fetchCatFacts";
import { fetchImg } from "../services/fetchCatMedia";
export const useApp = () =>{
    
    const[fact,setFact]=useState(null)
    const[img, setImg]=useState(null)
    const[isLoading, setLoading] = useState(false)
    const[words, setWords] = useState(null)
    const[error,setError] = useState(null)

    useEffect(()=>{
     fetchData()
  }, [])

  const fetchData = () =>{
    setLoading(true)
    fetchFacts()
   .then((fact)=>{
     setFact(fact)
     if(fact){
         const wordsArray = fact.split(" ").slice(0,4)
         setWords(wordsArray.join(" "))
     }

   })
   .catch((error)=>{
     setError(error)
   })

  }

    useEffect(() =>{
       fetchImage()    
    },[words])

    const fetchImage = () =>{

        if(words) {
            fetchImg({words})
            .then((img)=>{
                setImg(img)
            })
            .catch((error)=>{
                setError(error)
            })
            .finally(()=>setLoading(false))
          }

    }


    const handleOnClick = () => {
        fetchData()
    }
  return {fact, img, isLoading, words, error, handleOnClick}
}