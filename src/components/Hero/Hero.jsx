import './Hero.scss'
import pic from '../../assets/profile.png'
import {FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { HiOutlineDownload, HiMail } from 'react-icons/hi'
import resume from '../../assets/resume.pdf'


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
          <a href={resume} className="btn" download='resume' >download cv <HiOutlineDownload /></a>
        </div>
        <div className="socials">
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
      </div>
      <div className="right">
        <img src={pic} alt="profile" />
      </div>
      </div>
    </div>
  )
}

export default Hero