import React, { useState, useEffect } from "react"

const LoginPage = props => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  useEffect(() => {})

  const submitLogin = event => {
    event.preventDefault()
    const loginInfo = {
        userName: userName,
        password: password
    }
    alert(userName + " : " + password)
    if (isValidForSubmission()) {
      fetch("/api/v1/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          if (response.ok) {

          } else {
            let errorMessage = `${response.statues} (${response.statusText})`,
            error = new Error(errorMessage)
            throw error
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    } else {
        
    }
  }

  const isValidForSubmission = () => {}

  const onUserNameChange = event => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  const onPasswordChange = event => {
    event.preventDefault()
    setPassword(event.target.value)
  }

  return (
    <div>
      <div className="bg-modal">
        <div className="modal-content">
          <img
            className="image-resized"
            src="https://cdn2.iconfinder.com/data/icons/animal-vivid-volume-1/256/Chameleon-512.png"
            alt=""
          />
          <h4 id="hero-section-text">Login Admin</h4>
          <div className="alert-box">
              <p>Username invalid</p>
              <p>Password invalid</p>
              {/* <ul>
                  <li>Username invalid</li>
                  <li>Password invalid</li>
              </ul> */}
          </div>
          <form onSubmit={submitLogin} action="">
            <input
              onChange={onUserNameChange}
              type="text"
              name="username"
              placeholder="User Name"
            />
            <input
              onChange={onPasswordChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <input type="submit" className="button" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
