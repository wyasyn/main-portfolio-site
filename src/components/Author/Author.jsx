import './Author.scss'
import {images} from '../../constants/images'

function Author() {
  return (
    <div className='blog-author'>
        <div className="pic">
            <img src={images.Me} alt="pic" />
        </div>
        <p className="name">
            Yasin Walum
        </p>
    </div>
  )
}

export default Author