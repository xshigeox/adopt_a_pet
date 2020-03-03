import React, { useState } from "react"
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

  const onSubmitHandler = event => {
    event.preventDefault()
    if (isValidForSubmission()) {
      props.handleSubmit(newSurrender)
      setNewSurrender(defaultFormValues)
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

  return (
    <form
      autoComplete="off"
      id="surrenderForm"
      className="callout"
      onSubmit={onSubmitHandler}
    >
      <h1>Surrender a Pet</h1>
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
}

export default SurrenderForm
