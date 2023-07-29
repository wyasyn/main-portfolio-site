import './About.scss'
import {Header, Stats} from '../../components'
import profile from '../../assets/about2.png'
import { HiOutlineDownload } from 'react-icons/hi'
import resume from '../../assets/resume.pdf'

function About() {
  return (
    <div id="about" className="about">
      <Stats />
      <div className="about-container container">
        <Header 
        sub='who am i'
        title='about me'
        description='Welcome to my portfolio website! I am thrilled to have you here and share my passion for web development. Through this platform, I aim to showcase my skills, experience, and creative projects in the digital realm.
        ' />
        <div className="about-content">
          <div className="col-1">
            <div className="pic">
              <img src={profile} alt="pic" />
            </div>
          </div>
          <div className="col-2">
            <h2>Yasin Walum</h2>
            <h3>Front-End Developer</h3>
            <p>
              As a dedicated web developer, I strive to merge design aesthetics with functionality, crafting engaging and user-friendly websites. Whether you&apos;re seeking an expert in front-end development, back-end programming, or both, I am confident that my diverse skill set and innovative approach will captivate your interest. Join me on this journey as we explore the exciting world of web development together.
            </p>
            <a href={resume} className="btn btn-primary" download='resume' >Download CV <HiOutlineDownload /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About