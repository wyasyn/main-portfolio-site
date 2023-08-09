import './App.scss'
import { Home } from './Pages'
import { Navbar } from './components'
import { Footer } from './sections'

function App() {

  return (
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
  )
}

export default App
