import { Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

 
  return (
    <>
    <Navbar/>
    
<br />

    <div className="card bg-base-200 w-150 shadow-sm self-center mx-auto">
  <figure className="px-10 pt-10">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/b/b7/Beecarbonize_cover.jpg"
      alt="ImgNotLoading"
      className="rounded-xl w-130" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Beecarbonize</h2>
    <p>A 2023 free-to-play real time card-based simulation video game.</p>
    <div className="card-actions">
      <button className="btn btn-primary"><Link to={'/about'}>About Page</Link></button>
    </div>
  </div>
</div>

<br />
<br />


<div className="card bg-base-200 w-150 shadow-sm self-center mx-auto">
  <figure className="px-10 pt-10">
    <img
      src="https://darkanddarker.wiki.spellsandguns.com/images/c/c9/Dark-and-darker-main.png"
      alt="ImgNotLoading"
      className="rounded-xl w-130" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dark and Darker</h2>
    <p>Dark and Darker is a multiplayer action role-playing game developed by Ironmace.</p>
    <div className="card-actions">
      <button className="btn btn-primary"><Link to={'/aboutTwo'}>About Page</Link></button>
    </div>
  </div>
</div>

<br />
<br />


<div className="card bg-base-200 w-150 shadow-sm self-center mx-auto">
  <figure className="px-10 pt-10">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsit7l9dTh8sP4t7sA7AIO6-6IRUzYMUVQJQ&s"
      alt="ImgNotLoading"
      className="rounded-xl w-130" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Muck</h2>
    <p>Muck is a free survival rogue-like game created in one month by developer and YouTuber Dani.</p>
    <div className="card-actions">
      <button className="btn btn-primary"><Link to={'/aboutThree'}>About Page</Link></button>
    </div>
  </div>
</div>







<div className="min-h-50"></div>


    <Footer/>
   </>
  )
}

export default App
