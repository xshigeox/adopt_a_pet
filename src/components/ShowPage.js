import React, { useState, useEffect } from "react"
import AnimalInfo from "./AnimalInfo"

const ShowPage = props => {
	const [pet, setPet] = useState({})
	const petId = props.match.params.id

	useEffect(() => {
		fetch(`/api/v1/pets/${petId}`)
			.then(response => {
				if (response.ok) {
					return response
				} else {
					let errorMessage = `${response.status} (${response.statusText})`,
						error = new Error(errorMessage)
					throw error
				}
			})
			.then(response => response.json())
			.then(fetchedPet => {
				setPet(fetchedPet)
			})
	}, {})

	return <AnimalInfo key={petId} pet={pet} />
}

export default ShowPage
