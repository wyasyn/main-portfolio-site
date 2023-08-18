import './App.scss'
import { useTheme } from './ThemeContext/ThemeContext'
import {Blog, MainPage, Projects} from './Pages'
import { Route, Routes } from 'react-router-dom'
import { BackToTop, ScrollToTop } from './components'

function App() {

  const {theme} = useTheme()

  return (
      <div id='home' className={`App ${theme}`}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='blog' element={ <Blog /> } />
          <Route path='projects' element={ <Projects /> } />
        </Routes>
        <BackToTop />
      </div>
  )
}

export default App
