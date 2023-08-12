import './About.scss'
import {Header, Stats} from '../../components'
import profile from '../../assets/about2.png'
import { HiOutlineDownload } from 'react-icons/hi'
import resume from '../../assets/resume.pdf'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="about">
      <Stats />
      <article className="about-container container">
        <Header 
        sub='who am i'
        title='about me'
        description='Welcome to my portfolio website! I am thrilled to have you here and share my passion for web development. Through this platform, I aim to showcase my skills, experience, and creative projects in the digital realm.
        ' />
        <div className="about-content">
          <motion.div 
            whileInView={{ x:[-50,0] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          className="col-1">
            <div className="pic">
              <img src={profile} alt="pic" title='Yasin Walum' loading='lazy' />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x:[50,0] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
           className="col-2">
            <strong>Yasin Walum</strong>
            <h3>Front-End Developer</h3>
            <p>
              As a dedicated web developer, I strive to merge design aesthetics with functionality, crafting engaging and user-friendly websites. Whether you&apos;re seeking an expert in front-end development, back-end programming, or both, I am confident that my diverse skill set and innovative approach will captivate your interest. Join me on this journey as we explore the exciting world of web development together.
            </p>
            <a href={resume} className="btn btn-primary" download='resume' >Download CV <HiOutlineDownload /></a>
          </motion.div>
        </div>
      </article>
    </section>
  )
}

export default About