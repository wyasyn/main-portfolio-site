import './Contact.scss'
import {ContactInfo, Header} from '../../components'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'



function Contact() {
  const InfoData = [
    {
      title: 'Location',
      icon: <ImLocation2 />,
      describe:'Kyaliwajjala, Kampala, Uganda'
    },
    {
      title: 'Whatsapp',
      icon: <FaWhatsapp />,
      describe:'+256750771111'
    },
    {
      title: 'Instagram',
      icon: <FaInstagram />,
      describe:'@yasynwlm'
    },
  ]
  return (
    <div id="contact" className="contact">
      <Header
      sub='contact'
      title='get in touch with me'
      description="I'm always looking for new ways to help people. If you have a question or need help, please don't hesitate to contact me."
       />
       <div className="contact-container container">
        <div className="contact-box">
          <form className="col-1" action="https://formsubmit.co/6a1e2edb56ea14755490a5969a7a4f51" method="POST" >
            <h2>
              Say Something
            </h2>
            <input className='inputs'  type="text" name="name" id="name" placeholder='Name' />
            <input className='inputs'  type="email" name="email" id="email" placeholder='Email' />
            <textarea  className='inputs' name="message" id="message" rows="4" placeholder='Message' ></textarea>
            <input className='btn btn-primary' type="submit" value="SEND MESSAGE" />
          </form>
          <div className="col-2">
            {
              InfoData.map((data, index)=>(
                <ContactInfo
                key={index}
                {...data}
                 />
              ))
            }
          </div>
        </div>
       </div>
       <div className="pic">
       </div>
    </div>
  )
}

export default Contact