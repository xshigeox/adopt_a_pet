import React from "react"

const PendingSurrenderList = props => {
  const {
    id,
    name,
    phone_number,
    email,
    pet_name,
    pet_age,
    pet_type_id,
    pet_image_url,
    vaccination_status,
    application_status
  } = props.data

  let status
  if (vaccination_status === true) {
    status = "Up to Date"
  } else {
    status = "Not Up to Date"
  }
}

export default PendingSurrenderList
