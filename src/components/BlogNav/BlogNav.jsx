import './BlogNav.scss'
import WhiteLogo from '../../assets/logo-white-monkey.svg'
import BlackLogo from '../../assets/logo-monkey.svg'
import { useTheme } from '../../ThemeContext/ThemeContext'
import {MdDarkMode, MdLightMode } from 'react-icons/md'
import {Link} from 'react-router-dom'

function BlogNav() {
    const { theme, toggleTheme } = useTheme()
  return (
    <nav className="blog-nav-container container">
        <Link to='/' className='logo' title='Back to Home Page' >
        {
          theme === 'dark' ? <img src={WhiteLogo} alt="logo" />:  <img src={BlackLogo} alt="logo" />
        }
        </Link>
        <button className="toggle" onClick={toggleTheme} title={ theme === 'dark' ? 'Change to Light Mode' : 'Change to Dark Mode' }>
        {
          theme === 'dark' ? <MdLightMode /> :  <MdDarkMode />
        }
      </button>
    </nav>
  )
}

export default BlogNav