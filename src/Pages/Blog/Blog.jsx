import './Blog.scss'
import { Author, BlogNav } from '../../components'
import {images} from '../../constants/images'

function Blog() {
  return (
    <main className="blog-page">
      <BlogNav />
      <header className='blog-header'>
        <div className="blog-intro container">
          <h1 className='blog-heading'>
            Web Development and Design
          </h1>
          <p className='blog-par'>
          Explore captivating insights, practical tips, and personal anecdotes that illuminate the path in web development.
          </p>
          <h2 className='blog-main-title'>
            Articles
          </h2>
        </div>
      </header>
      <div className="blog-hero container"  >
        <img className='bg-image' src={images.BlogMain} alt="ai" />
        <div className="blog-overlay"></div>
        <div className="blog-content">
        <div className="blog-hero-author">
          <Author />
        </div>
        <div className="blog-hero-info">
        <h2>
          Artificial Intelligence Beyound Imagination
        </h2>
        <p>
        Responsive design is crucial in today&apos;s digital landscape where users access websites and applications from a wide range of devices with varying screen sizes and orientations.
        </p>
        </div>
        </div>
      </div>
    </main>
  )
}

export default Blog