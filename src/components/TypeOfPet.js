import React from "react";

const TypeOfPet = props => {
  const { type, description, img_url } = props.data;

  return (
    <div className="featured-image-block medium-6 column">
      <a href="#">
        <img
          className="resizing-img"
          src={img_url}
        />
        <p className="text-center featured-image-block-title">{type}</p>
      </a>
      <p>{description}</p>
    </div>
  );
};

export default TypeOfPet;
