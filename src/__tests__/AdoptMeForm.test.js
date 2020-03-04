import React from "react"
import { BrowserRouter } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import AdoptMeForm from "../components/AdoptMeForm"

describe("adopt me form", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <AdoptMeForm petId={4} formReveal={true} />
      </BrowserRouter>
    )
  })

  it("should contain a 'h1' that says 'Adopt Me!", () => {
    expect(wrapper.find("h1").text()).toEqual("Adopt Me!")
  })

  it("first input should have type of text", () => {
    const input = wrapper.find("input").at(0)
    expect(input.prop("type")).toEqual("text")
  })

  it("first input should have 'id' name", () => {
    const input = wrapper.find("input").at(0)
    expect(input.prop("id")).toEqual("name")
  })

  it("second input should have type of text", () => {
    const input = wrapper.find("input").at(1)
    expect(input.prop("type")).toEqual("text")
  })

  it("second input should have 'id' phoneNumber", () => {
    const input = wrapper.find("input").at(1)
    expect(input.prop("id")).toEqual("phoneNumber")
  })

  it("third input should have type of text", () => {
    const input = wrapper.find("input").at(2)
    expect(input.prop("type")).toEqual("text")
  })

  it("third input should have 'id' email", () => {
    const input = wrapper.find("input").at(2)
    expect(input.prop("id")).toEqual("email")
  })

  it("should have a fourth hidden input", () => {
    const input = wrapper.find("input").at(3)
    expect(input.prop("type")).toEqual("hidden")
  })

  it("hidden input should have a id of applicationStatus", () => {
    const input = wrapper.find("input").at(3)
    expect(input.prop("id")).toEqual("applicationStatus")
  })

  it("hidden input should have a value of 'pending'", () => {
    const input = wrapper.find("input").at(3)
    expect(input.prop("value")).toEqual("pending")
  })

  it("should have a second hidden input", () => {
    const input = wrapper.find("input").at(4)
    expect(input.prop("type")).toEqual("hidden")
  })

  it("second hidden input should have id of 'petId", () => {
    const input = wrapper.find("input").at(4)
    expect(input.prop("id")).toEqual("petId")
  })

  it("second hidden input should have value passed from props", () => {
    const input = wrapper.find("input").at(4)
    expect(input.prop("value")).toEqual(4)
  })

  it("should have a final input of type 'submit", () => {
    const input = wrapper.find("input").at(5)
    expect(input.prop("type")).toEqual("submit")
  })
})
