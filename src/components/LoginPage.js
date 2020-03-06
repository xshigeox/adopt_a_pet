import React, { useState, Fragment } from "react"
import PendingAppContainer from "./PendingAppContainer"
import PendingSurrenderContainer from "./PendingSurrenderContainer"

const LoginPage = props => {
  const initiError = {
    username: "",
    password: ""
  }
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState(initiError)
  const [display, setDisplay] = useState("bg-modal")

  const submitLogin = event => {
    event.preventDefault()
    const loginInfo = {
      username: userName,
      password: password
    }

    if (isValidForSubmission()) {
      fetch("/api/v1/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            let errorMessage = `${response.statues} (${response.statusText})`,
              error = new Error(errorMessage)
            throw error
          }
        })
        .then(data => {
          let submitErrors
          if (data.rows.length !== 0) {
            setDisplay("bg-hide")
          } else {
            submitErrors = {
              ...submitErrors,
              ["username"]: "username or password invalid!"
            }
          }
          setErrors(submitErrors)
          setUserName("")
          setPassword("")
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const isValidForSubmission = () => {
    let submitErrors = {}
    if (!userName || userName === "") {
      submitErrors = {
        ...submitErrors,
        ["username"]: "username invalid!"
      }
    }
    if (!password || password === "") {
      submitErrors = {
        ...submitErrors,
        ["password"]: "password invalid!"
      }
    }
    setErrors(submitErrors)
    return Object.entries(submitErrors).length === 0
  }

  const onUserNameChange = event => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  const onPasswordChange = event => {
    event.preventDefault()
    setPassword(event.target.value)
  }

  let adminPage
  if (display === "bg-hide") {
    adminPage = (
      <div>
        <div>
          <h6 className="header-title">Pending Adoption Applications</h6>
          <PendingAppContainer />
        </div>

        <div>
          <h6 className="header-title">
            Pending Animal Surrender Applications
          </h6>
          <PendingSurrenderContainer />
        </div>
      </div>
    )
  }
  return (
    <Fragment>
      <div className={display}>
        <div className="modal-content">
          <img
            className="image-resized"
            src="https://cdn2.iconfinder.com/data/icons/animal-vivid-volume-1/256/Chameleon-512.png"
            alt=""
          />
          <h4 id="hero-section-text">Login Admin</h4>
          <div className="alert-box">
            <p>{errors ? errors.username : ""}</p>
            <p>{errors ? errors.password : ""}</p>
          </div>
          <form onSubmit={submitLogin} action="">
            <input
              onChange={onUserNameChange}
              type="text"
              name="username"
              placeholder="User Name"
              value={userName}
            />
            <input
              onChange={onPasswordChange}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
            />
            <input type="submit" className="button" value="Submit" />
          </form>
        </div>
      </div>

      <div>{adminPage}</div>
    </Fragment>
  )
}

export default LoginPage
