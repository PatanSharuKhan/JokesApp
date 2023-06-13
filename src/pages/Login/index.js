import "./index.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [UserName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isPassVisible, setPassVisibility] = useState(false)
  const [errorStatus, setErrorStatus] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem("userDetails")) !== null
    if (isLogged) navigate("/")
  })

  const updateName = (event) => {
    setUserName(event.target.value)
    setErrorStatus(false)
  }

  const updatePassword = (event) => {
    setPassword(event.target.value)
    setErrorStatus(false)
  }

  const updateVisibility = () => {
    setPassVisibility((prev) => !prev)
  }

  const verifyAndProceed = (event) => {
    event.preventDefault()
    const obj = {
      userName: "jokes",
      password: "jokes2023",
    }
    if (obj.userName === UserName) {
      if (obj.password === password) {
        const data = JSON.parse(localStorage.getItem("userDetails"))
        if (data === null) {
          localStorage.setItem("userDetails", JSON.stringify(obj))
          navigate("/")
        } else {
          console.log(data)
        }
      } else {
        setErrorStatus(true)
      }
    } else {
      setErrorStatus(true)
    }
  }

  return (
    <div
      id="loginSection"
      className="container d-flex flex-column justify-content-center d-lg-flex"
    >
      <div className="row">
        <div
          id="loginImageBlock"
          className="order-lg-1 col-lg-6 d-flex justify-content-center"
        >
          <img
            className="w-75 rounded-circle"
            src="https://images.squarespace-cdn.com/content/v1/5f024ccc9fa198769d8942bf/1594486785024-PH1QV5LBIX8ITAJ2A6Y8/Log+in.png"
            alt="login"
          />
        </div>
        <div id="loginFormBlock" className="col-lg-6">
          <form className="d-flex flex-column pt-5" onSubmit={verifyAndProceed}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              value={UserName}
              placeholder="ex:- sharu"
              id="userName"
              onChange={updateName}
              className="mb-3 p-2 rounded"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type={isPassVisible ? "text" : "password"}
              value={password}
              id="password"
              onChange={updatePassword}
              className="mb-3 p-2 rounded"
              required
            />
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="me-2"
                onChange={updateVisibility}
              />
              <span>Show Password</span>
            </div>
            <p className={errorStatus ? "text-danger d-block" : "d-none"}>
              *Invalid User Credentials
            </p>
            <div>
              <button type="submit" className="btn btn-success mt-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
