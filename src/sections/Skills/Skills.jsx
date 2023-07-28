import './Skills.scss'
import {Header, Skill} from '../../components'
import { FaReact, FaJava } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { GrCss3 } from 'react-icons/gr'

function Skills() {
  const Skillsdata =[
    {
      icon: <FaReact />,
      name:'React',
      overlay:'great at react'
    },
    {
      icon: <GiPencilBrush />,
      name:'Design',
      overlay:'great at react'
    },
    {
      icon: <GrCss3 />,
      name:'Responsiveness',
      overlay:'great at react'
    },
    {
      icon: <FaJava />,
      name:'Programming',
      overlay:'great at react'
    },
  ]
  return (
   <div id="skills" className="skills">
      <Header
      sub='Skills'
      title='Why choose me'
      description='the reason to choose me'
       />
       <div className="skills-content">
        {
          Skillsdata.map((item,index)=>(
            <Skill 
            key={index}
            {...item}
             />
          ))
        }
       </div>
   </div>
  )
}

export default Skills