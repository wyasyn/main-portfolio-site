import './App.scss'
import { Home } from './Pages'
import { ArrowUp, Navbar } from './components'

function App() {

  return (
    <>
        <div className="App">
          <Navbar />
          <Home />
          <ArrowUp />
        </div>
    </>
  )
}

export default App
