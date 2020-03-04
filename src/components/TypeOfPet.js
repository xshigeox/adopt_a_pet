import React from "react"
import { Link } from "react-router-dom"

const TypeOfPet = props => {
  const { type, description, img_url } = props.data
  const path = '/' + type.split(' ').join(''). trim() + 's'

  return (
    <div className="featured-image-block medium-6 column">
      <Link to={path}>
        <img className="resizing-img" src={img_url} />
        <p className="text-center featured-image-block-title">{type}</p>
      </Link>
      <p>{description}</p>
    </div>
  )
}

export default TypeOfPet
