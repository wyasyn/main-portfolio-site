import './Portfolio.scss'
import { Header, ProjectLong, ProjectShort } from '../../components'
import { images } from '../../constants/images'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <Header
      sub='Portfolio'
      title='check my wonderful work'
      description=' I am excited to showcase my skills and share my journey as I continue to explore and innovate in the ever-evolving world of front-end development.'
       />
       <motion.div
          whileInView={{ y: [50,0] }}
          transition={{ duration:1, ease: 'easeInOut' }}
        className="portfolio-container container">
        <ProjectLong
        url1='https://yasyn.netlify.app'
        image1={images.project1}
        title1='Personal Portfolio'
        url2='https://blogr256.netlify.app/'
        image2={images.project2}
        title2='Blogr Landing Page'
         />
        <ProjectShort
        url1='https://loopstudio256.netlify.app/'
        image1={images.project3}
        title1='Loop Studio'
        url2='https://rahstudio.netlify.app/'
        image2={images.project4}
        title2='RahStudio'
         />
        <ProjectLong
        url1='https://zingy-conkies-89afef.netlify.app/'
        image1={images.project5}
        title1='Grilli Restaurant'
        url2='https://mellow-croissant-797345.netlify.app/'
        image2={images.project6}
        title2='Insure'
         />
        <ProjectShort
        url1='https://huddle256.netlify.app/'
        image1={images.project7}
        title1='Huddle Landing Page'
        url2='https://gleeful-longma-0c7fd6.netlify.app/'
        image2={images.project8}
        title2='Nike landing Page'
         />
       </motion.div>
       <div className="button">
        <Link to='projects' className="btn btn-secondary" >See More</Link>
       </div>
    </section>
  )
}

export default Portfolio