import './Service.scss'
import PropTypes from 'prop-types';

function Service({icon, title}) {
  return (
    <div className="service">
        <div className="icon">
            {icon}
        </div>
        <h4>
            {title}
        </h4>
    </div>
  )
}

Service.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  };

export default Service