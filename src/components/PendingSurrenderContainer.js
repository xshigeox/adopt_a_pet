import React, { useState, useEffect } from "react"
import PendingSurrenderList from "./PendingSurrenderList"

const PendingSurrenderContainer = props => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch("/api/v1/surrenderApplications")
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
    const surrenderApplications = list.map(application => {
      return <PendingSurrenderList key={application.email} data={application} />
    })

    return (
      <div>
        <div className="pets-you-might-know">
          <div className="add-people-header">{surrenderApplications}</div>
        </div>
      </div>
    )
  } else {
    return ""
  }
}

export default PendingSurrenderContainer
