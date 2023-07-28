import './Testimonials.scss'
import { Header, Testimony } from '../../components'
import { images } from '../../constants/images'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa'

function Testimonials() {

  const [activeIndex, setActiveIndex] = useState(0);

  const TestimonialData = [
    {
      name:'Joanitah Muki',
      photo: images.profile2 ,
      title: 'CEO',
      comment: 'It was a great pressure working with him. What an excellent developer, loved his work. Works with great customer care. Really Good. Love him'
    },
    {
      name:'Cindy Newton',
      photo: images.profile3 ,
      title: 'Executive Director',
      comment: 'It was a great pressure working with him. What an excellent developer, loved his work. Works with great customer care. Really Good. Love him'
    },
    {
      name:'Petr Wahigton',
      photo: images.profile4 ,
      title: 'Designer',
      comment: 'It was a great pressure working with him. What an excellent developer, loved his work. Works with great customer care. Really Good. Love him'
    },
    {
      name:'Mark Drury',
      photo: images.profile5 ,
      title: 'Web Developer',
      comment: 'It was a great pressure working with him. What an excellent developer, loved his work. Works with great customer care. Really Good. Love him'
    },
    {
      name:'Martini Xhaka',
      photo: images.profile6 ,
      title: 'Accountant',
      comment: 'It was a great pressure working with him. What an excellent developer, loved his work. Works with great customer care. Really Good. Love him'
    },

  ]

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    }
    else if (newIndex >= TestimonialData.length) {
      newIndex = TestimonialData.length - 1;
    }
    setActiveIndex(newIndex)
  }

  return (
    <div id="testimonial" className="testimonial">
      <Header
      sub='testimonials'
      title='what people say about me'
      description='coming soon!'
       />

       <div className="testimonial-container container">
        <div className="content" >
          {
            TestimonialData.map((data, index) => (
              <div 
              className={ index === activeIndex ? 'slide active' : 'slide' }
              key={index}>
                    { index === activeIndex && (
                  <Testimony
                  {...data}
                   />
                )
              }
              </div>
            ))
          }
        </div>
        <div className="arrow-left" 
        onClick={()=>{
          updateIndex(activeIndex - 1)
        }}
        >
          <FaArrowLeft />
        </div>
        <div className="indicators">
          {
            TestimonialData.map((data,index) => (
              <div className={index===activeIndex? "test-btn active" : "test-btn"} key={index} 
              onClick={()=>{
                updateIndex(index)
              }}
              >
                <FaCircle />
              </div>
            ))
          }
        </div>
        <div className="arrow-right"
         onClick={()=>{
          updateIndex(activeIndex + 1)
        }}
        >
            <FaArrowRight />
        </div>
       </div>
    </div>
  )
}

export default Testimonials