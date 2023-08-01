import './App.scss'
import { Home } from './Pages'
import { ArrowUp, Navbar } from './components'
import { useState, useEffect } from "react";
import logo from './assets/logo-white-monkey.svg'
import loadee from './assets/loader.gif'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
    {
      loading ?
      <div className="loader">
        <div className="loading">
          <div className="icon">
            <img src={logo} alt="logo" />
          </div>
          <div className="load">
              <img src={loadee} alt="loadee" />
          </div>
        </div>
      </div>
      :
      <div className="App">
      <Navbar />
      <Home />
      <ArrowUp />
    </div>
    }
    </>
  )
}

export default App
