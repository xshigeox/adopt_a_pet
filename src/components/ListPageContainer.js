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
