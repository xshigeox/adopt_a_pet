import React from "react"

const PendingAppList = props   =>  {
  const {petName, img_url, vaccinationStatus, adoptionStory, adoptionStatus, name, phone, email, homeStatus, applicationStatus} = props.data


  return(
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
          <p className="author-name">Applicant Name: {name}</p>
          <p className="author-location">Phone Number: {phone}</p>
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
          <button class="button secondary small">
            <i class="fa fa-user-times" aria-hidden="true"></i>
            Deny
          </button>
        </div>
      </div>
    </div>
  )
} 
export default PendingAppList