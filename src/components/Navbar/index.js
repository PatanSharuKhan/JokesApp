import { useNavigate } from "react-router-dom"
import "./index.css"

// --------------------[ components ]-----------------------------

const Button = ({ removePermission }) => (
  <button type="button" className="btn btn-primary" onClick={removePermission}>
    Logout
  </button>
)

// --------------------[ main ]-----------------------------

const Navbar = () => {
  const navigate = useNavigate()

  const removePermission = () => {
    localStorage.removeItem("userDetails")
    navigate("/login")
  }

  return (
    <>
      <div className="container d-flex p-2 justify-content-between align-items-center">
        <h1 id="jokesTitle">Jokes</h1>
        <Button removePermission={removePermission} />
      </div>
      <hr className="container" />
    </>
  )
}

export default Navbar
