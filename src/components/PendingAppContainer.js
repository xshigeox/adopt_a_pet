import React, { useState, useEffect } from "react"
import PendingAppList from "./PendingAppList"

const PendingAppContainer = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch("/api/v1/adoptionApplications")
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
        setList(json)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (list[0] !== undefined) {
    const adoptionApplicants = list.map(element => {
      return <PendingAppList key={element.email} data={element} />
    })

    return (
      <div>
        <div className="pets-you-might-know">
          <div className="add-people-header">{adoptionApplicants}</div>
        </div>
      </div>
    )
  } else {
    return ""
  }
}
export default PendingAppContainer
