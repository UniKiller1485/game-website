import { Link } from "react-router-dom"


function Navbar() {
    return (
<div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><Link to={'/'}>Home</Link></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>More</Link></li>
    </ul>
  </div>
</div>
    )
}

export default Navbar;