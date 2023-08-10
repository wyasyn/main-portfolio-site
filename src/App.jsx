import './App.scss'
import { Home } from './Pages'
import { Navbar } from './components'
import { Footer } from './sections'
import { useTheme } from './ThemeContext/ThemeContext'

function App() {

  const {theme} = useTheme()

  return (
      <div id='home' className={`App ${theme}`}>
        <Navbar />
        <Home />
        <Footer />
      </div>
  )
}

export default App
