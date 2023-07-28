import './Navbar.scss'
import { NavDesk, NavMobile } from '../../components'

function Navbar() {
  return (
    <div className="navbar">
      <NavMobile />
      <NavDesk />
    </div>
  )
}

export default Navbar