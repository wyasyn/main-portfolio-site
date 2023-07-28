import './NavDesk.scss'
import logo from '../../assets/logo-white-monkey.svg'

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
    </nav>
  )
}

export default NavDesk