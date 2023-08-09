import './Skill.scss'
import PropTypes from 'prop-types';

function Skill({icon, name, overlay}) {
  return (
    <article className="skill">
      <div className="icon">
        {icon}
      </div>
      <p className='name'>
        {name}
      </p>
      <div className="overlay">
        <p>
        {overlay}
        </p>
      </div>
    </article>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  overlay: PropTypes.string.isRequired,
};

export default Skill