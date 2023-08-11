import './Home.scss'
import { About, Blog, Contact, Portfolio, Services, Skills, Testimonials } from '../../sections'
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
      <Blog />
      <Contact />
    </main >
  )
}

export default Home