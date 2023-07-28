import './Footer.scss'
import {FaTwitter, FaGithub, FaLinkedin, FaCodepen, FaArrowCircleUp } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="col-1">
            <small>
              &copy; {currentYear} All Rights Reserved.
            </small>
        </div>
        <div className="col-2">
          <a href='/' className="social" title='LinkedIn'>
              <FaLinkedin />
            </a>
            <a href='/' className="social" title='CodePen'>
              <FaCodepen />
            </a>
            <a href='/' className="social" title='Twitter'>
              <FaTwitter />
            </a>
            <a href='/' className="social" title='Github'>
              <FaGithub />
            </a>
        </div>
      </div>
      <a  href='#home' className="back">
        <FaArrowCircleUp />
      </a>
    </footer>
  )
}

export default Footer