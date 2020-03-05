<<<<<<< HEAD
import React, { useState, useEffect } from "react"
import ListPage from "./ListPage"

const ListPageContainer = props => {
  const [lists, setLists] = useState([])

  const reptile = "guineapig"

  useEffect(() => {
    fetch(`/api/v1/pets/${reptile}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(result => {
        return result.json()
      })
      .then(json => {
        console.log(`RESULT JSON: ${json}`)
        setLists(json)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const listOfPets = lists.map(element => {
    return <ListPage data={element} />
  })

  return (
    <div className="pets-you-might-know">
      <div className="add-pets-header">
        <h6 className="header-title">Give them a Forever Home</h6>
      </div>
      {listOfPets}
    </div>
  )
}

export default ListPageContainer
=======
import React, { useState, useEffect } from "react"
import ListPage from "./ListPage"

const ListPageContainer = props => {
  const [lists, setLists] = useState([])
  let petType = props.petType

  useEffect(() => {
    fetch(`/api/v1/${petType}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(result => {
        return result.json()
      })
      .then(json => {
        setLists(json)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const TypeOfPets = lists.map(element => {
    return <ListPage key={element.id} data={element} />
  })

  return (
    <div>
      <div className="pets-you-might-know">
        <div className="add-people-header">
          <h6 className="header-title">{props.petTypeName}</h6>
          {TypeOfPets}
        </div>
      </div>
    </div>
  )
}

export default ListPageContainer
>>>>>>> d6da04787cdab7758319dff9c67b6c5ab0dede5e
