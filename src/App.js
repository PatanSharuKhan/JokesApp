import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Home = () => {
  return <h1>hello</h1>
}

const Login = () => {
  return <h1>Login</h1>
}

const NotFound = () => {
  return <h1>Not Found Page</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
