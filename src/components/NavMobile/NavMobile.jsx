import './NavMobile.scss'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../../assets/logo-white-monkey.svg'
import  { useState } from 'react'
import {motion} from 'framer-motion'

function NavMobile() {

  const [click, setClick]=useState(false)

  click ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  const handleClick = () => {
    setClick(true);
  }
  const closeMenu = () => {
    setClick(false);
  }


  return (
    <>
    <nav className="n-mobile container">
      <a href="/" className='logo'>
        <img src={logo} alt="logo" />
      </a>
      <button className="menu">
        {
          click?
          <FaTimes className='icon' onClick={closeMenu} />:
          <FaBars className='icon' onClick={handleClick} />
        }
      </button>
      {
        click && <motion.div 
        whileInView={{opacity: [0,1]}}
        transition={{duration:0.6, ease: 'easeInOut'}}
         className="n-list-mobile"
         >
        { ["home", "about", "services", "portfolio", "testimonial", "contact" ].map((item, index) => (
           <a href={`#${item}`} key={index} className='n-link' onClick={closeMenu}>
             {item}
           </a>
         ))
         }
       </motion.div>
      }
    </nav>
    {
      click && <motion.div whileInView={{opacity: [0,1]}} transition={{duration:0.6, ease: 'easeInOut'}}  className="layer"></motion.div>
    }
    </>
  )
}

export default NavMobile