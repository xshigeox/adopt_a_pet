import React, { useState, useEffect } from "react"
import ListPage from "./ListPage"

const ListPageContainer = props => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("/api/v1/reptile")
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
      <div className="pets-you-might-know">
        <div className="add-people-header">
          <h6 className="header-title">Pets You Might Not Know</h6>
          {TypeOfPets}
        </div>
      </div>
    </div>
  )
}

export default ListPageContainer
