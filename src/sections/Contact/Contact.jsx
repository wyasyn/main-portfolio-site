import './Contact.scss'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {ContactInfo, Header} from '../../components'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import {TiTick} from 'react-icons/ti'
import {RxCross2} from 'react-icons/rx'



function Contact() {

  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
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
  const form = useRef();
 
        const sendEmail = (e) => {

          e.preventDefault();

          emailjs.sendForm('service_89hfvwr', 'template_5cqh2ye', form.current, 'EAwUbmHikNYNpY6xC')
            .then(() => {
              e.target.reset();
              setSuccess(true)
            }
            )
            .catch(()=>{
              setFail(true)
            })
        };

  return (
    <div id="contact" className="contact">
      <Header
      sub='contact'
      title='get in touch with me'
      description="I'm always looking for new ways to help people. If you have a question or need help, please don't hesitate to contact me."
       />
       <div className="contact-container container">
        <div className="contact-box">
          <form className="col-1" ref={form} onSubmit={sendEmail} >
            <h2>
              Say Something
            </h2>
            <input 
            className='inputs'  
            type="text" 
            name="name" 
            id="name" 
            placeholder='Name'
            />
            <input  
            className='inputs'  
            type="email" 
            name="email" 
            id="email" 
            placeholder='Email' />

            <textarea
            className='inputs' 
            name="message" 
            id="message" rows="4" 
            placeholder='Message' ></textarea>
            <input className='btn btn-primary' type="submit" value="SEND MESSAGE" />
          </form>
          {
            success && <div className='message'>
              <div className="tick">
                <TiTick />
              </div>
              <h3>Thank You!</h3>
              <p>
              Your submission has been sent.
              </p>
              <button className='ok' onClick={()=>{setSuccess(false)}}>
                OK
              </button>
            </div>
          }
          {
            fail && <div className='message2'>
              <div className="tick">
                <RxCross2 />
              </div>
              <h3>Sorry!</h3>
              <p>
              Message not sent
              </p>
              <button className='ok' onClick={()=>{setFail(false)}}>
                OK
              </button>
            </div>
          }
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
       <div className="map">
       <div width="100%"><iframe width="100%" height="600"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kyaliwajjala,%20Wakiso+(Primates%20Code)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe></div>
       </div>
    </div>
  )
}

export default Contact