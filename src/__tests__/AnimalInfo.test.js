import React from "react"
import { BrowserRouter } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import AnimalInfo from "../components/AnimalInfo"

describe("animal info component", () => {
  let wrapper
  const pet = [
    {
      name: "Rex",
      age: 4,
      img_url: "www.snake.com",
      vaccinationStatus: true,
      adoptionStory: "Needs a home",
      petId: 1
    }
  ]

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <AnimalInfo pet={pet} />
      </BrowserRouter>
    )
  })

  it("should contain an 'h3' with name from props", () => {
    const element = wrapper.find("h3").at(0)
    expect(element.text()).toEqual("Rex")
  })

  it("should contain an 'h5' with age from props", () => {
    const element = wrapper.find("h5").at(0)
    expect(element.text()).toEqual("Age: 4")
  })
})
