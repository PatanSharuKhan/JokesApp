import "./index.css"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [jokesData, setJokesData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const isLogged = localStorage.getItem("userDetails") !== null
    if (!isLogged) navigate("/login")

    // if logged in
    const url =
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    const data = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { jokes } = data
        setJokesData(jokes)
      })
  }, [])

  const renderItems = () =>
    jokesData.map((joke) => (
      <div className="col-12 d-flex align-items-center" key={joke.id}>
        <span className="badge bg-primary me-2">{joke.category}</span>
        {joke.joke}
      </div>
    ))

  return (
    <>
      <Navbar />
      <h1 className="container fst-italic fs-2 text-danger mb-4">
        The Popular Jokes
      </h1>
      <div className="container">
        {jokesData.length !== 0 && <div className="row">{renderItems()}</div>}
      </div>
    </>
  )
}

export default Home
