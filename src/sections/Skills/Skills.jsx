import './Skills.scss'
import {Header, Skill} from '../../components'
import { FaReact, FaGithub } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { BsPaletteFill } from 'react-icons/bs'

function Skills() {
  const Skillsdata =[
    {
      icon: <FaReact />,
      name:'React',
      overlay:'Interactivity and dynamic elements, DOM manipulation, event handling & AJAX'
    },
    {
      icon: <GiPencilBrush />,
      name:'Design',
      overlay:'Photoshop, Illustrator, Figma, Adobe XD and others'
    },
    {
      icon: <BsPaletteFill />,
      name:'Responsiveness',
      overlay:'Websites look and function well on various devices and screen sizes'
    },
    {
      icon: <FaGithub />,
      name:'Version Control',
      overlay:'collaborate with other developers, track changes, and manage code efficiently using Git & Github'
    },
  ]
  return (
   <section id="skills" className="skills">
      <Header
      sub='Skills'
      title='Why choose me'
      description='I thrive on transforming ideas and designs into interactive and user-friendly web experiences. From responsive layouts to intuitive user interfaces, I take pride in crafting seamless, visually appealing, and engaging websites.'
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
   </section>
  )
}

export default Skills