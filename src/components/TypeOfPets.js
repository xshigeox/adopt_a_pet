import React, { useState, useEffect } from "react"

const TypeOfPets = props =>  {

    const [petType, setPetType] = useState([])
    
    useEffect( () =>  {
        fetch("/api/pet_type")
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                    error = new Error(errorMessage);
                throw (error);
            }
        })
            .then(result => {
                console.log(result.json())
                return (result.json())
                
            })
            .then(json => {
                setPetType(json.body)
                console.log(json.body)
            })
            .catch(error => {
                console.log(error)
            })
    }
    , []
    )


    console.log(petType)


    return(
        <h1>Hi</h1>
    )
}
export default TypeOfPets