import "./index.css"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// -----[ components ]-----
const Spinner = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

// -----[ main ]-----
const Home = () => {
  const [jokesData, setJokesData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isApiError, setApiError] = useState(false)
  const [retry, setRetry] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const isLogged = localStorage.getItem("userDetails") !== null
    if (!isLogged) navigate("/login")

    // if logged in
    setLoading(true)
    const url =
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { jokes } = data
        setJokesData(jokes)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setApiError(true)
        setLoading(false)
      })
  }, [navigate, retry])

  const renderItems = () => (
    <table className="table table-success table-striped container">
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Joke</th>
        </tr>
      </thead>
      <tbody>
        {jokesData.map((joke) => (
          <tr>
            <td>{joke.category}</td>
            <td>{joke.joke}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  const renderData = () =>
    isApiError ? (
      <div className="container mt-3">
        <div className="row d-flex flex-column align-items-center">
          <img
            className="col-10 col-lg-6 rounded-circle"
            src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/07/000-HTTP-Error-400.png"
            alt="bad-pic"
          />
          <button
            type="button"
            className="col-2 btn btn-warning text-light mt-3 mb-4"
            onClick={() => setRetry(!retry)}
          >
            Retry
          </button>
        </div>
      </div>
    ) : (
      <div className="container">{jokesData.length !== 0 && renderItems()}</div>
    )

  return (
    <>
      <Navbar />
      <h1 className="container fst-italic fs-2 text-danger mb-4">
        The Popular Jokes-
        <span className="btn btn-danger " onClick={() => setRetry(!retry)}>
          Refresh
        </span>
      </h1>
      {isLoading ? <Spinner /> : renderData()}
    </>
  )
}

export default Home
