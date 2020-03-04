import React from "react"

const ListPage = props => {
  const { img_url, name, vaccination_status, age } = props.data

  return (
    <div className="row add-pets-section">
      <div className="small-12 medium-6 columns about-pets">
        <div className="about-pets-avatar">
          <img className="avatar-image" src={img_url} alt={name} />
        </div>
        <div className="about-pets-author">
          <p className="author-name">{name}</p>
          <p className="author-location">Age: {age}</p>
          <p className="author-mutual">
            <strong>Up to Date on Shots?</strong>{" "}
            {vaccination_status == true ? "Yes" : "No"}
          </p>
        </div>
      </div>
      <div className="small-12 medium-6 columns add-friend">
        <div className="add-friend-action">
          <button className="button primary small">
            <i className="fa fa-user-plus" aria-hidden="true"></i>
            Adopt Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListPage
