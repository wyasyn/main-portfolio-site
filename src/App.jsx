import './App.scss'
import { Home } from './Pages'
import { Navbar } from './components'

function App() {

  return (
    <>
        <div className="App">
          <Navbar />
          <Home />
        </div>
    </>
  )
}

export default App
