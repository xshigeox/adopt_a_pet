import React, { useState, useEffect } from "react";
import TypeOfPet from "./TypeOfPet";

const TypeOfPetsContainer = props => {
  const [petType, setPetType] = useState([]);

  useEffect(() => {
    fetch("/api/v1/pet_type")
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(result => {
        return result.json();
      })
      .then(json => {
        setPetType(json);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const listOfPets = petType.map(element => {
    return <TypeOfPet data={element} />;
  });

  return (
    <div className="featured-image-block-grid">
      <div className="featured-image-block-grid-header columns text-center">
        <h2>Pet Types</h2>
        <p>Select your future best friend.</p>
      </div>
        <div className="row">
          { listOfPets }
        </div>
    </div>
  );
};
export default TypeOfPetsContainer;