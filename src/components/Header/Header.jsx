import './Header.scss'
import PropTypes from 'prop-types';

function Header({sub, title, description}) {
  return (
    <header className="header">
        <p className='header-sub'>{sub}</p>
        <h2 className='header-title'>{title}</h2>
        <p className='par'>
            {description}
        </p>
    </header>
  )
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header