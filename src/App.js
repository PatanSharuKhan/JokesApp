import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Home() {
  return <h1>hello</h1>
}

function Login() {
  return <h1>Login</h1>
}

function NotFound() {
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
