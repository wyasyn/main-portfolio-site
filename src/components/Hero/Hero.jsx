import './Hero.scss'
import pic from '../../assets/profile.png'
import {FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { HiOutlineDownload, HiMail } from 'react-icons/hi'
import resume from '../../assets/resume.pdf'


function Hero() {
  return (
    <section className='hero'>
      <article className="hero-container container">
      <div className="left">
       <div className="content">
       <h1 className="hero-heading">
        <p className='hello'>
          Hello, I&apos;m
        </p>
        <strong className='heading-name'>
          Yasin Walum &nbsp;
        </strong>
        <p className='title'>
          front-end developer
        </p>
        </h1>
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
        <img src={pic} alt="profile" title='Yasin Walum' loading='lazy' />
      </div>
      </article>
    </section>
  )
}

export default Hero