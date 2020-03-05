import React from "react"
import { BrowserRouter } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import ListPage from "../components/ListPage"

describe("list page component", () => {
  let wrapper
  const data = {
    img_url: "www.snake.com",
    name: "Rex",
    vaccination_status: true,
    age: 3,
    id: 1
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ListPage data={data} />
      </BrowserRouter>
    )
  })

  it("should contain am 'img element", () => {
    expect(wrapper.find("img")).toBeDefined()
  })

  it("should have a img src from props", () => {
    const element = wrapper.find("img")
    expect(element.prop("src")).toEqual("www.snake.com")
  })

  it("should contain a 'p' element with name from props", () => {
    const element = wrapper.find("p").at(0)
    expect(element.text()).toEqual("Rex")
  })

  it("should contain a 'p' element with age from props", () => {
    const element = wrapper.find("p").at(1)
    expect(element.text()).toEqual("Age: 3")
  })

  it("should contain 'p' element with text based on data from props", () => {
    const element = wrapper.find("p").at(2)
    expect(element.text()).toEqual("Up to Date on Shots? Yes")
  })

  it("should contain a link with data from props", () => {
    expect(wrapper.find("Link").props()["to"]).toEqual("/pets/1")
  })
})
