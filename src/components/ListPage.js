import React from "react"

const ListPage = props => {
  const { img_url, name, age, vaccination_status } = props.data
  console.log(vaccination_status)

  return (
    <div className="row add-pets-section">
      <div className="small-12 medium-6 columns about-pets">
        <div className="about-pets-avatar">
          <img className="avatar-image" src={img_url} alt={name} />
        </div>
        <div className="about-pets-author">
          <p className="author-name">Name {name}</p>
          <p className="author-location">Age {age}</p>
          <p className="author-mutual">
            <strong>Shots up to Date? </strong>{" "}
            {vaccination_status == true ? "Yes" : "No"}
          </p>
        </div>
      </div>
      <div className="small-12 medium-6 columns add-friend">
        <div className="add-friend-action">
          <button className="button primary small">
            <i className="fa fa-user-plus" aria-hidden="true"></i>
            More Information
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListPage
