import './Home.scss'
import { About, Contact, Footer, Header, Portfolio, Services, Skills, Testimonials } from '../../sections'

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
    <Footer />
    </main >
  )
}

export default Home