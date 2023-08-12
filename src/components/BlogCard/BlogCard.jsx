import './Blogcard.scss'
import {Author} from '../../components'
import PropTypes from 'prop-types';

function BlogCard({ image, title, article, link }) {
  return (
    <article className='blog__card'>
        <div className="blog__card-photo">
            <img className='blog-pic' src={image} alt="blog image" />
            <div className="author-name">
                    <Author />
            </div>
        </div>
        <div className="blog__card-content">
            <h3 className='blog__card-heading'>
                {title}
            </h3>
            <p className="blog__card-summary">
                {article}
            </p>
            <a href={link} className="btn">Read more</a>
        </div>
    </article>
  )
}

BlogCard.propTypes = {
    image: PropTypes.any,
    title: PropTypes.string,
    article: PropTypes.string,
    link: PropTypes.string,
};

export default BlogCard