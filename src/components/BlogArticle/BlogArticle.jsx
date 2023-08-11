import './BlogArticle.scss'
import {Link} from 'react-router-dom'
import {BsArrowRightShort} from 'react-icons/bs'
import { PropTypes } from 'prop-types'

function BlogArticle({image, title, author, article, link}) {
  return (
    <article className="blog-article">
        <div className="blog-photo">
            <img src={image} alt="blog image" />
        </div>
        <div className="blog-content">
            <h3 className='blog-title-head'>{title}</h3>
            <p className="author">{author}</p>
            <p className="paragraph">
                {article}
            </p>
            <Link to={link} className='read-me'>
              READ MORE <BsArrowRightShort />
            </Link>

        </div>
    </article>
  )
}

BlogArticle.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    author: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
  

export default BlogArticle