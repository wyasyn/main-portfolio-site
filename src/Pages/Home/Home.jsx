import './Home.scss'
import { About, Contact, Header, Portfolio, Services, Skills, Testimonials } from '../../sections'

function Home() {
  return (
    <main className='main'>
    <Header />
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