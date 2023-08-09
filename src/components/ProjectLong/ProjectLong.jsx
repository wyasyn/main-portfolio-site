import './ProjectLong.scss'
import PropTypes from 'prop-types';

function ProjectLong({url1,url2,image1,image2,title1,title2}) {
  return (
    <article className="long">
       <a href={url1} className="col-1" target='_blank' rel='noreferrer' >
          <img src={image1} alt="project" loading='lazy' />
            <div className="overlay">
              {title1}
            </div>
        </a>
      <a href={url2} className="col-2" target='_blank' rel='noreferrer' >
        <img src={image2} alt="project" loading='lazy' />
          <div className="overlay">
            {title2}
          </div>
      </a>
    </article>
  )
}

ProjectLong.propTypes = {
  url1: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  url2: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

export default ProjectLong