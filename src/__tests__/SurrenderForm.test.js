import React from "react"
import { BrowserRouter } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import SurrenderForm from "../components/SurrenderForm"

describe("surrender form", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <SurrenderForm />
      </BrowserRouter>
    )
  })

  it("should contain an 'h1' that says 'Surrender a Pet", () => {
    expect(wrapper.find("h1").text()).toEqual("Surrender a Pet")
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

  it("fourth input should have type of text", () => {
    const input = wrapper.find("input").at(3)
    expect(input.prop("type")).toEqual("text")
  })

  it("fourth input should have 'id' petName", () => {
    const input = wrapper.find("input").at(3)
    expect(input.prop("id")).toEqual("petName")
  })

  it("fifth input should have type of text", () => {
    const input = wrapper.find("input").at(4)
    expect(input.prop("type")).toEqual("text")
  })

  it("fifth input should have 'id' petAge", () => {
    const input = wrapper.find("input").at(4)
    expect(input.prop("id")).toEqual("petAge")
  })

  it("sixth input should be a select option for petType", () => {
    const input = wrapper.find("select").at(0)
    expect(input.prop("id")).toEqual("petType")
  })

  it("seventh input should have type of text", () => {
    const input = wrapper.find("input").at(5)
    expect(input.prop("type")).toEqual("text")
  })

  it("seventh input should have 'id' petImageUrl", () => {
    const input = wrapper.find("input").at(5)
    expect(input.prop("id")).toEqual("petImageUrl")
  })

  it("eighth input should be a select option for vaccinationStatus", () => {
    const input = wrapper.find("select").at(1)
    expect(input.prop("id")).toEqual("vaccinationStatus")
  })

  it("should have a hidden input", () => {
    const input = wrapper.find("input").at(6)
    expect(input.prop("type")).toEqual("hidden")
  })

  it("hidden input should have an id of 'applicationStatus", () => {
    const input = wrapper.find("input").at(6)
    expect(input.prop("id")).toEqual("applicationStatus")
  })

  it("'applicationStatus should have a value of 'pending'", () => {
    const input = wrapper.find("input").at(6)
    expect(input.prop("value")).toEqual("pending")
  })
})
