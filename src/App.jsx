import { Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

 
  return (
    <>
    <Navbar/>
    
    <div className="card bg-base-100 w-96 shadow-sm self-center min-w-screen">
  <figure className="px-10 pt-10">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/b/b7/Beecarbonize_cover.jpg"
      alt="BeecarbonizeImgNotLoading"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Beecarbonize</h2>
    <p>A 2023 free-to-play real time card-based simulation video game.</p>
    <div className="card-actions">
      <button className="btn btn-primary"><Link to={'/about'}>About Page</Link></button>
    </div>
  </div>
</div>

<div className="min-h-103"></div>


    <Footer/>
   </>
  )
}

export default App
