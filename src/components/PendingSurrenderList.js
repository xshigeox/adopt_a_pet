import React, { useState } from "react"

const PendingSurrenderList = props => {
  const [story, setStory] = useState({
    story: ""
  })
  const {
    id,
    name,
    phone_number,
    email,
    pet_name,
    pet_age,
    pet_type_id,
    pet_img_url,
    vaccination_status,
    application_status
  } = props.data

  let status
  if (vaccination_status === true) {
    status = "Up to Date"
  } else {
    status = "Not Up to Date"
  }

  let animalType
  if (pet_type_id === 1) {
    animalType = "Guinea Pig"
  } else if (pet_type_id === 2) {
    animalType = "Reptile"
  }

  const handleInputChange = event => {
    setStory({
      ...story,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const updateStatus = event => {
    event.preventDefault()
    const approvalStatus = {
      name: pet_name,
      img_url: pet_img_url,
      age: pet_age,
      vaccination_status: vaccination_status,
      adoption_story: story.story,
      adoption_status: "Pending",
      pet_type_id: pet_type_id,
      application_status: "Approved"
    }

    fetch("/api/v1/surrenderStatus", {
      method: "POST",
      body: JSON.stringify(approvalStatus),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.statues} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    alert("Form " + event.currentTarget.value)
    window.location.href = "http://localhost:3000/pets"
  }

  return (
    <div className="add-pets-section">
      <div className="row ">
        <div className="small-6 columns about-pets-avatar">
          <img
            className="avatar-image pending-form-img"
            src={pet_img_url}
            alt={pet_name}
          />
        </div>

        <div className="small-6 columns about-pets div-pending-pet-applicant">
          <div className="about-pets-author">
            <p className="author-name">{pet_name}</p>
            <p className="author-location">Type of Animal: {animalType}</p>
            <p className="author-location">Vaccination Status: {status}</p>
            <p className="author-location">Pet Age: {pet_age}</p>
            <p className="author-location">
              Application Status: {application_status}
            </p>
          </div>
        </div>

        <div className="small-6 columns about-pets div-pending-pet-applicant">
          <div className="about-pets-author">
            <p className="author-name">Applicant: {name}</p>
            <p className="author-location">Phone Number: {phone_number}</p>
            <p className="author-location">Email: {email}</p>
            <label htmlFor="adoptionStory">
              <p className="author-location">Adoption Story:</p>
              <input
                type="text"
                name="story"
                id="story"
                value={story.story}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <div className="small-6 columns add-friend div-pending-button">
          <div className="add-friend-action">
            <button
              className="button primary small"
              value="Approved"
              id={id}
              onClick={updateStatus}
            >
              <i className="far fa-smile" aria-hidden="true"></i> Approve
            </button>
            <button
              className="button secondary small"
              value="Denied"
              id={id}
              onClick={updateStatus}
            >
              <i className="far fa-frown" aria-hidden="true"></i> Deny
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PendingSurrenderList
