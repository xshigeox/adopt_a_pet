import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from "lodash"
import ErrorList from "./ErrorList"

const SurrenderForm = props => {
  const defaultFormValues = {
    name: "",
    phoneNumber: "",
    email: "",
    petName: "",
    petAge: "",
    petType: "",
    petImageUrl: "",
    vaccinationStatus: ""
  }

  const [newSurrender, setNewSurrender] = useState(defaultFormValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [toHome, setToHome] = useState(false)

  const isValidForSubmission = () => {
    let submitErrors = {}
    const requiredFields = [
      "name",
      "phoneNumber",
      "email",
      "petName",
      "petType",
      "petImageUrl"
    ]

    requiredFields.forEach(field => {
      if (newSurrender[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleInputChange = event => {
    setNewSurrender({
      ...newSurrender,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const addNewPet = event => {
    event.preventDefault()
    if (isValidForSubmission()) {
      fetch("/api/v1/newPet", {
        method: "POST",
        body: JSON.stringify(newSurrender),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          if (response.ok) {
            setSubmitted(true)
          } else {
            let errorMessage = `${response.statues} (${response.statusText})`,
              error = new Error(errorMessage)
            throw error
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const vaccinationStatusList = ["Yes", "No"]
  const vaccinationStatus = [""].concat(vaccinationStatusList).map(status => {
    return (
      <option key={status} value={status}>
        {status}
      </option>
    )
  })
  const petTypeList = ["Guinea Pig", "Reptile"]
  const petType = [""].concat(petTypeList).map((type, index) => {
    return (
      <option key={type} value={index}>
        {type}
      </option>
    )
  })

  if (submitted === false) {
    return (
      <form
        autoComplete="off"
        id="surrenderForm"
        className="callout form-format"
        onSubmit={addNewPet}
      >
        <h1 className="header-title">Surrender a Pet</h1>
        <ErrorList errors={errors} />
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newSurrender.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={newSurrender.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={newSurrender.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="petName">Pet Name:</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={newSurrender.petName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="petAge">Pet Age:</label>
          <input
            type="text"
            id="petAge"
            name="petAge"
            value={newSurrender.petAge}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="petType">Pet Type:</label>
          <select
            id="petType"
            onChange={handleInputChange}
            value={newSurrender.petType}
          >
            {petType}
          </select>
        </div>

        <div>
          <label htmlFor="petImageUrl">Image URL:</label>
          <input
            type="text"
            id="petImageUrl"
            name="petImageUrl"
            value={newSurrender.petImageUrl}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="vaccinationStatus">Vaccination Status:</label>
          <select
            id="vaccinationStatus"
            onChange={handleInputChange}
            value={newSurrender.vaccinationStatus}
          >
            {vaccinationStatus}
          </select>
        </div>

        <input
          type="hidden"
          name="applicationStatus"
          id="applicationStatus"
          value="pending"
        />

        <input type="submit" className="button" value="submit" />
      </form>
    )
  } else {
    return (
      <div>
        <h3 id="surrender-review">Your application is pending review.</h3>
        <div id="hidden">
          {setTimeout(() => setToHome(true), 3000)}
          {toHome ? <Redirect to="/pets" /> : null}
        </div>
      </div>
    )
  }
}

export default SurrenderForm
