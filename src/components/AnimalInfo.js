import React, { useState } from "react"
import AdoptMeForm from "./AdoptMeForm"

const AnimalInfo = (props)  =>  {
    
    const [formReveal, setFormReveal] = useState(false)

    const { name, age, vaccinationStatus, adoptionStory} = props.pet

    const onClickHandler = (event) =>  {
        setFormReveal(true)
    }

    return(
        <div>
            <div className="portfolio-resume-scrolling-container row">
                < div className = "columns small-12 medium-5 portfolio-resume-overview" >
                    < div className = "portfolio-resume-overview-content" >
                    <h3 className="portfolio-resume-name">{name}</h3>
                    <p>I'm kind of awesome. No really.</p>
                    <button className="button primary expanded" type="button" onClick={onClickHandler}>Adopt Me</button>
                    </div>
                </div>
            <div className="columns small-12 medium-7 portfolio-resume-scrolling">
                <h3>Age:</h3>
                <p>{age}</p>

                <h3>Vaccination Status:</h3>
                <p>{vaccinationStatus}</p>

                <h3>Adoption Story</h3>
                <p>{adoptionStory}</p>
            </div>
        </div>
        <div>
            <AdoptMeForm formReveal={formReveal}/>
        </div>
    </div>
)}

export default AnimalInfo