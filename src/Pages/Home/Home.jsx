import './Home.scss'
import { About, Contact, Portfolio, Services, Skills, Testimonials } from '../../sections'
import { Hero } from '../../components'

function Home() {
  return (
    <main className='main'>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main >
  )
}

export default Home