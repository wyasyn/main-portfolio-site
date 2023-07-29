import './Footer.scss'
import {FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF, FaArrowCircleUp } from 'react-icons/fa'

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
        <a href='https://www.linkedin.com/in/yasin-walum-01b18295/' className="social" title='LinkedIn' target='_blank' rel='noreferrer' >
            <FaLinkedinIn />
          </a>
          <a href='https://www.facebook.com/ywalum' className="social" title='CodePen'  target='_blank' rel='noreferrer'>
            <FaFacebookF />
          </a>
          <a href='https://twitter.com/wyasyn' className="social" title='Twitter'  target='_blank' rel='noreferrer'>
            <FaTwitter />
          </a>
          <a href='https://github.com/wyasyn' className="social" title='Github'  target='_blank' rel='noreferrer'>
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