import React, { useState, useEffect } from "react"
import TypeOfPet from "./TypeOfPet"

const TypeOfPetsContainer = props =>  {

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
                return (result.json())
            })
            .then(json => {
                setPetType(json)
                console.log(json)
            })
            .catch(error => {
                console.log(error)
            })
    }
    , []
    )

    const listOfPets = petType.map( element  =>  {
        return (
        <TypeOfPet
        data={element}
        />
        )
    })


    return(

        <div>
        {listOfPets}
        </div>
    )
}
export default TypeOfPetsContainer