import './NavMobile.scss'
import logo from '../../assets/logo-white-monkey.svg'
import  { useState } from 'react'
import {motion} from 'framer-motion'
import {MdLightMode, MdOutlineClose} from 'react-icons/md'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

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
    <button className="menu">
        {
          click?
          <MdOutlineClose className='icon' onClick={closeMenu} />:
          <HiOutlineMenuAlt4 className='icon' onClick={handleClick} />
        }
      </button>
      <a href="/" className='logo'>
        <img src={logo} alt="logo" />
      </a>
      <button className="toggle">
        <MdLightMode />
        {/* <MdDarkMode /> */}
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