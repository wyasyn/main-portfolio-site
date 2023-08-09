import './NavDesk.scss'
import logo from '../../assets/logo-white-monkey.svg'
import {MdLightMode} from 'react-icons/md'

function NavDesk() {
  return (
    <nav className="n-desk container">
      <a href="/" className='logo'>
        <img src={logo} alt="logo" />
      </a>
      <div className="n-list-desk">
      { ["home", "about", "services", "portfolio", "testimonial", "contact" ].map((item, index) => (
           <a href={`#${item}`} key={index} className='n-link'>
             {item}
           </a>
         ))
         }
      </div>
      <button className="toggle">
        <MdLightMode />
        {/* <MdDarkMode /> */}
      </button>
    </nav>
  )
}

export default NavDesk