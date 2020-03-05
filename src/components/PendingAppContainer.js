import React, { useState, useEffect } from "react"
import PendingAppList from "./PendingAppList"

const PendingAppContainer = ()   =>  {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch("/api/v1/adoption_applications") 
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

  const adoptionApplicants = list.map(element  =>  {
    return <PendingAppList data={element} />
  })

  return(
    <div>
      <div className="pets-you-might-know">
        <div className="add-people-header">
          <h6 className="header-title">Adoption Applicants</h6>
          {adoptionApplicants}
        </div>
      </div>
    </div>
  )
}
export default PendingAppContainer