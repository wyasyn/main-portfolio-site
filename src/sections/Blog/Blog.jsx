import './Blog.scss'
import {BlogArticle, Header} from '../../components'
import { BlogDataMinor, BlogTitle } from '../../constants/Data'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

function Blog() {
  return (
    <section id="blog" className='blog'>
        <div className="blog-container container">
            <Header
            {...BlogTitle}
             />
            <motion.div
                whileInView={{ y: [50,0] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
             className="blog-articles">

              {
                BlogDataMinor.map((data, index) => (
                  <BlogArticle
                  key={index}
                  {...data}
                   />
                ))
              }
            </motion.div>
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