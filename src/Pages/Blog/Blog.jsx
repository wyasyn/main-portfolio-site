import './Blog.scss'
import { Author, BlogCard, BlogNav } from '../../components'
import {images} from '../../constants/images'
import {BlogDataMajor} from '../../constants/Data'
import {Footer} from '../../sections'

function Blog() {
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
          Artificial Intelligence Beyound Imagination
        </h2>
        <p>
        Responsive design is crucial in today&apos;s digital landscape where users access websites and applications from a wide range of devices with varying screen sizes and orientations.
        </p>
        </div>
        </div>
      </div>
      <section className="blog__content container">
        {
          BlogDataMajor.map((data,index) => (
            <BlogCard
            key={index}
            {...data}
             />
          ))
        }
      </section>
      <Footer />
    </main>
  )
}

export default Blog