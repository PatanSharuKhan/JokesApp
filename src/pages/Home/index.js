import "./index.css"
import Navbar from "../../components/Navbar"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const isLogged = localStorage.getItem("userDetails") === null
    if (isLogged) navigate("/login")
  })
  return <Navbar />
}

export default Home
