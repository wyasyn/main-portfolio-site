import './Skill.scss'
import PropTypes from 'prop-types';

function Skill({icon, name, overlay}) {
  return (
    <div className="skill">
      <div className="icon">
        {icon}
      </div>
      <h4 className='name'>
        {name}
      </h4>
      <div className="overlay">
        <p>
        {overlay}
        </p>
      </div>
    </div>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  overlay: PropTypes.string.isRequired,
};

export default Skill