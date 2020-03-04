import React from "react"

const ListPage = props => {
  const { img_url, name, vaccination_status, age } = props.data

  return (
    <div class="row add-pets-section">
      <div class="small-12 medium-6 columns about-pets">
        <div class="about-pets-avatar">
          <img class="avatar-image" src={img_url} alt={name} />
        </div>
        <div class="about-pets-author">
          <p class="author-name">{name}</p>
          <p class="author-location">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Age: {age}
          </p>
          <p class="author-mutual">
            <strong>Up to Date on Shots?</strong> {vaccination_status}
          </p>
        </div>
      </div>
      <div class="small-12 medium-6 columns add-friend">
        <div class="add-friend-action">
          <button class="button primary small">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
            Add Friend
          </button>
          <button class="button secondary small">
            <i class="fa fa-user-times" aria-hidden="true"></i>
            Ignore
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListPage
