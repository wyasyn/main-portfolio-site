import './Navbar.scss'
import { NavDesk, NavMobile } from '../../components'

function Navbar() {
  return (
    <header className="navbar">
      <NavMobile />
      <NavDesk />
    </header>
  )
}

export default Navbar