import React from "react"


const TypeOfPet = props  =>   {

    const {id, type, description} = props.data

    return(
        <div>
            <h3>{type}</h3>
            <p>{description}</p>
        </div>
    )
}

export default TypeOfPet