import './Header.scss'
import PropTypes from 'prop-types';

function Header({sub, title, description}) {
  return (
    <div className="header">
        <h4 className='header-sub'>{sub}</h4>
        <h2 className='header-title'>{title}</h2>
        <p className='par'>
            {description}
        </p>
    </div>
  )
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header