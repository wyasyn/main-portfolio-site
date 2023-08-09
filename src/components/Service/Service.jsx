import './Service.scss'
import PropTypes from 'prop-types';

function Service({icon, title}) {
  return (
    <article className="service">
        <div className="icon">
            {icon}
        </div>
        <p>
            {title}
        </p>
    </article>
  )
}

Service.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  };

export default Service