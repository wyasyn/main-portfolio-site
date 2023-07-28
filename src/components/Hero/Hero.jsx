import './Hero.scss'
import pic from '../../assets/profile.png'
import {FaTwitter, FaGithub, FaLinkedin, FaCodepen} from 'react-icons/fa'
import { HiOutlineDownload, HiMail } from 'react-icons/hi'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-container container">
      <div className="left">
       <div className="content">
       <div className="hero-heading">
        <h3>
          Hello, I&apos;m
        </h3>
        <h1>
          Yasin Walum
        </h1>
        <h3 className='title'>
          front-end developer
        </h3>
        </div>
        <div className="cta">
          <a href="#contact" className="btn btn-secondary">hire me <HiMail /></a>
          <a href="../../assets/resume.pdf" className="btn" download >download cv <HiOutlineDownload /></a>
        </div>
        <div className="socials">
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
      </div>
      <div className="right">
        <img src={pic} alt="profile" />
      </div>
      </div>
    </div>
  )
}

export default Hero