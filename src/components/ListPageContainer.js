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
