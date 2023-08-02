import './App.scss'
import { Home } from './Pages'
import { ArrowUp, Navbar } from './components'
import { Footer } from './sections'

function App() {

  return (
    <>
      <div className="App">
      <Navbar />
      <Home />
      <ArrowUp />
      <Footer />
    </div>
    </>
  )
}

export default App
