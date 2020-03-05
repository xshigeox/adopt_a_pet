import React, { useState, Fragment } from "react"

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
            <p>{errors.username ? errors.username : ""}</p>
            <p>{errors.password ? errors.password : ""}</p>
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
      <div>
        <h1>ADMIN PAGE</h1>
      </div>
    </Fragment>
  )
}

export default LoginPage
