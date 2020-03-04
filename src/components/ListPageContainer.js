import React, { useState, useEffect } from "react"
import ListPage from "./ListPage"

const ListPageContainer = props => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("/api/v1/pets/reptiles")
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
    return <ListPage data={element} />
  })

  return (
    <div>
      <div class="pets-you-might-know">
        <div class="add-people-header">
          <h6 class="header-title">Pets You Might Not Know</h6>
          {TypeOfPets}
          <p>Test</p>
        </div>
      </div>
    </div>
  )
}
export default ListPageContainer
