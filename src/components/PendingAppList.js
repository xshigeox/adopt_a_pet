import React from "react"

const PendingAppList = props => {
  console.log(props.data)
  const {
    petName,
    img_url,
    vaccinationStatus,
    adoptionStory,
    adoptionStatus,
    person_name,
    phone_number,
    email,
    homeStatus,
    applicationStatus
  } = props.data

  return (
    <div className="row add-pets-section">
      <div className="about-pets-avatar">
        <img className="avatar-image" src={img_url} alt={petName} />
      </div>
      <div className="small-12 medium-6 columns about-pets">
        <div className="about-pets-author">
          <p className="author-location">Pet Name: {petName}</p>
          <p className="author-name">Vaccination Status: {vaccinationStatus}</p>
        </div>
      </div>
      <div className="small-12 medium-6 columns about-pets">
        <div className="about-pets-author">
          <p className="author-name">Adoption Story: {adoptionStory}</p>
          <p className="author-name">Adoption Status: {adoptionStatus}</p>
        </div>
      </div>
      <div className="small-12 medium-6 columns about-pets">
        <div className="about-pets-author">
          <p className="author-name">Applicant Name: {person_name}</p>
          <p className="author-location">Phone Number: {phone_number}</p>
          <p className="author-location">Email: {email}</p>
        </div>
      </div>
      <div className="small-12 medium-6 columns about-pets">
        <div className="about-pets-author">
          <p className="author-name">Home Status: {homeStatus}</p>
          <p className="author-name">Application Status: {applicationStatus}</p>
        </div>
      </div>
      <div className="small-12 medium-6 columns add-friend">
        <div className="add-friend-action">
          <button className="button primary small">
            <i className="fa fa-user-plus" aria-hidden="true"></i>
            Approve
          </button>
          <button className="button secondary small">
            <i className="fa fa-user-times" aria-hidden="true"></i>
            Deny
          </button>
        </div>
      </div>
    </div>
  )
}
export default PendingAppList
