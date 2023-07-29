import './Home.scss'
import { About, Contact, Footer, Header, Portfolio, Services, Skills, Testimonials } from '../../sections'
import { Navbar } from '../../components'

function Home() {
  return (
    <>
    <Navbar />
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