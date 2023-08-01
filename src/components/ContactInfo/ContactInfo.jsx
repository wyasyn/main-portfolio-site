import './ContactInfo.scss'
import PropTypes from 'prop-types';

function ContactInfo({icon, title, describe}) {
  return (
    <div className="contact-info">
        <div className="icon">
            {icon}
        </div>
        <div className="info">
            <h3>{title}</h3>
            <p>
                {describe}
            </p>
        </div>
    </div>
  )
}

ContactInfo.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    describe: PropTypes.string.isRequired,
  };

export default ContactInfo