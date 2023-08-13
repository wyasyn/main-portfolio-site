import './Projects.scss'
import { Author, BlogCard, BlogNav } from '../../components'
import {images} from '../../constants/images'
import {Works} from '../../constants/Data'
import {Footer} from '../../sections'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <main className="blog-page">
    <BlogNav />
    <div className="blog-hero container"  >
      <img className='bg-image' src={images.BlogMain} alt="ai" />
      <div className="blog-overlay"></div>
      <div className="blog-content">
      <div className="blog-hero-author">
        <Author />
      </div>
      <div className="blog-hero-info">
      <h2>
      Check My Wonderful Work
      </h2>
      <p>
          I am excited to showcase my skills and share my journey as I continue to explore and innovate in the ever-evolving world of front-end development.
      </p>
      </div>
      </div>
    </div>
    <section className="blog__content container">
      {
        Works.map((data,index) => (
          <BlogCard
          key={index}
          {...data}
           />
        ))
      }
    </section>
    <div className="button">
      <Link to='/' className="btn btn-primary" >
          Home Page
      </Link>
    </div>
    <Footer />
  </main>
  )
}

export default Projects