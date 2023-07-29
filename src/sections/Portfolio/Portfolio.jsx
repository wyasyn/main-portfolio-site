import './Portfolio.scss'
import { Header, ProjectLong, ProjectShort } from '../../components'
import { images } from '../../constants/images'

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <Header
      sub='Portfolio'
      title='check my wonderful work'
      description=' I am excited to showcase my skills and share my journey as I continue to explore and innovate in the ever-evolving world of front-end development.'
       />
       <div className="portfolio-container container">
        <ProjectLong
        url1='https://yasyn.netlify.app'
        image1={images.project1}
        title1='Project 1'
        url2='https://blogr256.netlify.app/'
        image2={images.project2}
        title2='Rahstudio Website'
         />
        <ProjectShort
        url1='https://loopstudio256.netlify.app/'
        image1={images.project3}
        title1='Project 3'
        url2='https://cerulean-scone-e8159c.netlify.app/'
        image2={images.project4}
        title2='Tic Tac Toe Game'
         />
        <ProjectLong
        url1='https://zingy-conkies-89afef.netlify.app/'
        image1={images.project5}
        title1='Restaurant Website'
        url2='https://mellow-croissant-797345.netlify.app/'
        image2={images.project6}
        title2='Project 6'
         />
        <ProjectShort
        url1='https://huddle256.netlify.app/'
        image1={images.project7}
        title1='Project 7'
        url2='https://bright-kringle-80b9cd.netlify.app/'
        image2={images.project8}
        title2='Project 8'
         />
       </div>
       <div className="button">
        <a href="https://www.walumyas.netlify.app/portfolio" className="btn btn-secondary" target='_blank' rel='noreferrer'>See More</a>
       </div>
    </div>
  )
}

export default Portfolio