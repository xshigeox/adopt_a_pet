import React from "react"
import { BrowserRouter } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import TypeOfPet from "../components/TypeOfPet"

describe("type of pet component", () => {
  let wrapper
  const data = {
    type: "Reptile",
    description: "Can be a snake",
    img_url: "www.snake.com"
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <TypeOfPet data={data} />
      </BrowserRouter>
    )
  })

  it("should contain an 'img'", () => {
    expect(wrapper.find("img")).toBeDefined()
  })

  it("image should have a src from props", () => {
    expect(wrapper.find("img").props()["src"]).toBe("www.snake.com")
  })

  it("should contain a 'Link'", () => {
    expect(wrapper.find("Link")).toBeDefined()
  })

  it("should contain a 'p' element with 'type' data from props", () => {
    const element = wrapper.find("p").at(0)
    expect(element.text()).toEqual("Reptile")
  })

  it("should contain a 'p' element with 'description' data from props", () => {
    const element = wrapper.find("p").at(1)
    expect(element.text()).toEqual("Can be a snake")
  })
})
