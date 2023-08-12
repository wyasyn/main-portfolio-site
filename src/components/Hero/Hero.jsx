import './Hero.scss'
import pic from '../../assets/profile.png'
import {FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { HiOutlineDownload, HiMail } from 'react-icons/hi'
import resume from '../../assets/resume.pdf'
import BlobDark from '../../assets/blob.svg'
import BlobLight from '../../assets/blob-light.svg'
import { useTheme } from '../../ThemeContext/ThemeContext'  
import { motion } from 'framer-motion'


function Hero() {
  const { theme } = useTheme()
  return (
    <section className='hero'>
      <article className="hero-container container">
      <div className="left">
       <div className="content">
       <motion.h1 
          whileInView={{x: [-50,0]}}
          transition={{ duration: 1, ease: 'easeInOut' }}
       className="hero-heading">
        <p className='hello'>
          Hello, I&apos;m
        </p>
        <strong
         className='heading-name'
         >
          Yasin Walum &nbsp;
        </strong>
        <p className='title'>
          front-end developer
        </p>
        </motion.h1>
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
        <motion.img
        whileInView={{ opacity: [0.5,1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
         className='profile' src={pic} alt="profile" title='Yasin Walum' loading='lazy' />
        {
          theme === 'dark' ? 
          <motion.img 
          whileInView={{ scale: [0.3,1], opacity: [0.5,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='blob' src={BlobDark} alt="blob" loading='lazy'/>:  
          <motion.img
          whileInView={{ scale: [0.3,1], opacity: [0.5,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }} 
          className='blob' src={BlobLight} alt="blob" loading='lazy'/>
        }
      </div>
      </article>
    </section>
  )
}

export default Hero