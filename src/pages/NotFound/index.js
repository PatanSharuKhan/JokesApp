const NotFound = () => {
  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <img
        className="w-75"
        src="https://lh5.ggpht.com/_9F9_RUESS2E/SpV5Yi8Vv5I/AAAAAAAAA4E/W9-J8eMLokM/s800/50-Cool-and-Creative-404-Error-Pages-25.jpg"
        alt="not-found"
      />
      <a href="/" className="mt-4">
        <button type="button" className="btn btn-primary">
          Go to HomePage
        </button>
      </a>
    </div>
  )
}

export default NotFound
