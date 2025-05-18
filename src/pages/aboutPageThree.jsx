import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

function AboutPage(){

return(

<>
<Navbar/>

<br />

<div className="card bg-base-200 w-200 shadow-sm mx-auto border-2 border-cyan-700">
<figure>
    <img
      src="https://cdn.tgdd.vn/GameApp/4/241849/Screentshots/muck-game-sinh-ton-the-gioi-mo-phong-cach-co-dien-08-06-2021-3.jpg"
      alt="Img Not Loading" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mx-auto text-4xl">GAMEPLAY</h2>
    <p className="text-2xl">The game features an open world sandbox for players to explore and develop and holds a lenient progress system, allowing the player to gradually unlock new, more powerful items,
 alike other survival and rogue-like titles, namely Minecraft and Risk of Rain 2.</p>
  </div>
</div>

<br />
<br />
<div className="flex w-full flex-col lg:flex-row">




  <div className="card bg-base-200 rounded-box grid min-h-32 grow place-items-center ml-50 w-96 shadow-sm border-2 border-cyan-700"><div className="card-body text-2xl">
    <p>Collect resources, craft tools, weapons, & armor, find items & build your base during day. But once night falls, mysterious enemies appear from the shadows. Using the resources and items you've crafted during the day, you must try and make it through the night.</p>
  </div></div>




  <div className="divider lg:divider-horizontal"></div>
  <div className="card bg-base-200 rounded-box grid min-h-32 grow place-items-center mr-50 w-96 shadow-sm border-2 border-cyan-700">  <div className="card-body text-2xl">
    <p className="">Muck is a multiplayer survival where your goal is To fix up a boat by gathering different recourses by battling bosses and once you have Completed the boat set sail to the final boss.</p>
  </div></div>


</div>

<div className="min-h-80"></div>

<Footer/>
</>

)
}



export default AboutPage;