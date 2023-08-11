import './NavDesk.scss'
import WhiteLogo from '../../assets/logo-white-monkey.svg'
import BlackLogo from '../../assets/logo-monkey.svg'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { motion } from 'framer-motion'

function NavDesk() {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className="n-desk container">
      <motion.a
        whileInView={{x:[-50,0]}}
        transition={{ duration: 1, ease: 'easeInOut' }}  
        href="/"
        className='logo'
       >
      {
          theme === 'dark' ? <img src={WhiteLogo} alt="logo" />:  <img src={BlackLogo} alt="logo" />
      }
      </motion.a>
      <motion.div 
      whileInView={{scale:[0.5,1]}}
      transition={{ duration: 1, ease: 'easeInOut' }} 
      className="n-list-desk"
      >
      { ["home", "about", "services", "portfolio", "testimonial", "blog", "contact" ].map((item, index) => (
           <a href={`#${item}`} key={index} className='n-link'>
             {item}
           </a>
         ))
         }
      </motion.div>
      <motion.button 
        whileInView={{x:[50,0]}}
        transition={{ duration: 1, ease: 'easeInOut' }} 
        className="toggle" 
        onClick={toggleTheme} 
        title={ theme === 'dark' ? 'Change to Light Mode' : 'Change to Dark Mode' }
      >
        {
          theme === 'dark' ? <MdLightMode /> :  <MdDarkMode />
        }
      </motion.button>
    </nav>
  )
}

export default NavDesk