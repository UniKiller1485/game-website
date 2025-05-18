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
      src="https://front.darkanddarker.com/media_9.webp"
      alt="Img Not Loading" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mx-auto text-4xl">GAMEPLAY</h2>
    <p className="text-2xl">Dark and Darker is a first-person hybrid between a dungeon crawler and a role-playing game with a dark medieval fantasy setting.
 The game blends elements from role-playing systems such as Dungeons & Dragons, roguelikes, and multiplayer video games such as DayZ, and has been described by Polygon as belonging to the extraction shooter genre.</p>
  </div>
</div>

<br />
<br />
<div className="flex w-full flex-col lg:flex-row">




  <div className="card bg-base-200 rounded-box grid min-h-32 grow place-items-center ml-50 w-96 shadow-sm border-2 border-cyan-700"><div className="card-body text-2xl">
    <p>Players can select one of ten character classes (fighter, barbarian, rogue, ranger, wizard, cleric, bard, warlock, druid, and sorcerer).
 The game features PvPvE (player versus player versus environment) gameplay, where players engage in combat against monsters to obtain valuable items while remaining vigilant against potential threats from other players.
 The environment gradually becomes more dangerous, eventually killing all remaining players who have not escaped the playable area. Surviving a match allows players to extract loot for use in future matches.</p>
  </div></div>




  <div className="divider lg:divider-horizontal"></div>
  <div className="card bg-base-200 rounded-box grid min-h-32 grow place-items-center mr-50 w-96 shadow-sm border-2 border-cyan-700">  <div className="card-body text-2xl">
    <p className="">If the player is killed, they lose all of their possessions and equipment. If the player successfully navigates through the dungeon and survives, they can store their acquired loot in a designated storage area for future use or potential sale.
    The game allows players to exchange items amongst themselves using in-game currency or other valuable items. Several updates during the early access phase of the game have introduced new features, including a marketplace for selling/buying in-game items,
 gear-based matchmaking to balance PvP interactions, a religion system that grants in-dungeon bonuses, and multiclassing.</p>
  </div></div>


</div>

<div className="min-h-20"></div>

<Footer/>
</>

)
}



export default AboutPage;