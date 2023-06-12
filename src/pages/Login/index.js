import Navbar from "../../components/Navbar"

const Login = () => {
  return (
    <>
      <Navbar />
      <div id="loginSection" className="container d-lg-flex">
        <div id="loginImageBlock" className="order-lg-1">
          <h1>image</h1>
        </div>
        <div id="loginFormBlock">
          <h1>form</h1>
        </div>
      </div>
    </>
  )
}

export default Login
