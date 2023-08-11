import './Blog.scss'
import {BlogArticle, Header} from '../../components'
import { BlogDataMinor, BlogTitle } from '../../constants/Data'
import {Link} from 'react-router-dom'

function Blog() {
  return (
    <section id="blog" className='blog'>
        <div className="blog-container container">
            <Header
            {...BlogTitle}
             />
            <div className="blog-articles">

              {
                BlogDataMinor.map((data, index) => (
                  <BlogArticle
                  key={index}
                  {...data}
                   />
                ))
              }
            </div>
            <div className="blog-button">
              <Link to='blog' className='btn primary' >
                More
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Blog