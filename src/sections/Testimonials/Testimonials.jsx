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
      comment: "He brought our vision to life with an incredible eye for design and attention to detail. Our website now looks and feels so much more engaging and user-friendly. We're thrilled with the results and highly recommend his services"
    },
    {
      name:'Cindy Newton',
      photo: images.profile3 ,
      title: 'Executive Director',
      comment: "His expertise in front-end development is evident in the seamless navigation and beautiful layout he created for our site. He was prompt, responsive, and took the time to understand our needs. We couldn't be happier with the outcome!"
    },
    {
      name:'Petr Wahigton',
      photo: images.profile4 ,
      title: 'Designer',
      comment: "Not only did he deliver a fantastic website, but they also made it responsive and optimized for all devices. Our website's performance has improved significantly, and we've received countless compliments from our users."
    },
    {
      name:'Mark Drury',
      photo: images.profile5 ,
      title: 'Web Developer',
      comment: " He brought a fresh perspective to our project and exceeded our expectations in every way. We're already planning to collaborate with him again in the future."
    },
    {
      name:'Martini Xhaka',
      photo: images.profile6 ,
      title: 'Accountant',
      comment: "We are incredibly satisfied with his work, and our website has received numerous compliments for its aesthetics and usability."
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
    <section id="testimonial" className="testimonial">
      <Header
      sub='testimonials'
      title='what people say about me'
      description="I am excited to continue pushing the boundaries of what's possible in this dynamic field. Let's collaborate and make the web a better place, one pixel at a time!"
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
    </section>
  )
}

export default Testimonials