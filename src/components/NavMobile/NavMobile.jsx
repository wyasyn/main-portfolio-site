import './NavMobile.scss'
import WhiteLogo from '../../assets/logo-white-monkey.svg'
import BlackLogo from '../../assets/logo-monkey.svg'
import  { useState } from 'react'
import {motion} from 'framer-motion'
import {MdDarkMode, MdLightMode, MdOutlineClose} from 'react-icons/md'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useTheme } from '../../ThemeContext/ThemeContext'

function NavMobile() {

  const [click, setClick]=useState(false)

  click ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  const handleClick = () => {
    setClick(true);
  }
  const closeMenu = () => {
    setClick(false);
  }

  const { theme, toggleTheme } = useTheme()


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
      {
          theme === 'dark' ? <img src={WhiteLogo} alt="logo" />:  <img src={BlackLogo} alt="logo" />
      }
      </a>
      <button className="toggle" onClick={toggleTheme} title={ theme === 'dark' ? 'Change to Light Mode' : 'Change to Dark Mode' }>
        {
          theme === 'dark' ? <MdLightMode /> :  <MdDarkMode />
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