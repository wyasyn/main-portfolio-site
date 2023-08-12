import './Services.scss'
import {Header, Service} from '../../components'
import { GiMouse } from 'react-icons/gi'
import {BsPeopleFill, BsSearch } from 'react-icons/bs'
import {LuMonitorSmartphone } from 'react-icons/lu'
import {MdComputer } from 'react-icons/md'
import {BiRefresh } from 'react-icons/bi'
import { motion } from 'framer-motion'

function Services() {
  const ServicesData = [
    {
      icon: <MdComputer />,
      title:'Website Development'
    },
    {
      icon: <LuMonitorSmartphone />,
      title:'UI / UX'
    },
    {
      icon: <BsPeopleFill />,
      title:'Consultation & Collaboration'
    },
    {
      icon: <BsSearch />,
      title:'SEO'
    },
    {
      icon: <GiMouse />,
      title:'Web Animation'
    },
    {
      icon: <BiRefresh />,
      title:'Code Maintenance & Updates'
    },
  ]
  return (
    <section id="services" className="services">
      <Header
      sub='service'
      title='what i do'
      description='I am passionate about crafting captivating digital experiences that leave a lasting impression. With a keen eye for design and a deep understanding of the latest web technologies.'
       />

       <motion.div 
       whileInView={{y: [50,0]}}
       transition={{ duration: 1, ease: 'easeInOut' }}
       className="service-content container">
        {
          ServicesData.map((item,index)=>(
            <Service
            key={index}
            {...item}
             />
          ))
        }
       </motion.div>
    </section>
  )
}

export default Services