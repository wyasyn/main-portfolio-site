import './Home.scss'
import { About, Contact, Footer, Header, Portfolio, Services, Skills, Testimonials } from '../../sections'

function Home() {
  return (
    <>
    <Header />
    <About />
    <Services />
    <Skills />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default Home