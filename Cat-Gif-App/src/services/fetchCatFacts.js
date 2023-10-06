const URL = "https://catfact.ninja/fact"

export const fetchFacts = async() => {
    return fetch(URL)
    .then((response)=>{
        if (!response.ok) {
            throw new Error("Opps, something went wrong with the facts")
        }
       return response.json()
    })
    .then((data)=>{
        const fact = data.fact
        return fact
    })
    .catch((error)=>{
        throw new Error(error)
    })
}