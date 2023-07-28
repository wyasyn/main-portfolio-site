import './Services.scss'
import {Header, Service} from '../../components'
import {GiSmartphone, GiMouse } from 'react-icons/gi'
import {LuMonitorSmartphone } from 'react-icons/lu'
import {MdComputer } from 'react-icons/md'

function Services() {
  const ServicesData = [
    {
      icon: <MdComputer />,
      title:'Web Development'
    },
    {
      icon: <LuMonitorSmartphone />,
      title:'Web Design'
    },
    {
      icon: <GiSmartphone />,
      title:'App Development'
    },
    {
      icon: <GiMouse />,
      title:'SEO'
    },
  ]
  return (
    <div id="services" className="services">
      <Header
      sub='service'
      title='what i do'
      description='the following are my services'
       />

       <div className="service-content container">
        {
          ServicesData.map((item,index)=>(
            <Service
            key={index}
            {...item}
             />
          ))
        }
       </div>
    </div>
  )
}

export default Services