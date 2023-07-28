import './Testimony.scss'
import PropTypes from 'prop-types';

function Testimony({name, photo, title, comment}) {
  return (
    <div className="testimony">
        <div className="pic">
            <img src={photo} alt="testimony" />
        </div>
        <div className="name">
            <p className='comment'>{comment}</p>
            <h3>{name}</h3>
            <p>{title} </p>
        </div>
    </div>
  )
}

Testimony.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  };

export default Testimony