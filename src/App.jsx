import './App.scss'
import { useTheme } from './ThemeContext/ThemeContext'
import {Blog, MainPage, Projects} from './Pages'
import { Route, Routes } from 'react-router-dom'

function App() {

  const {theme} = useTheme()

  return (
      <div id='home' className={`App ${theme}`}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='blog' element={ <Blog /> } />
          <Route path='projects' element={ <Projects /> } />
        </Routes>
      </div>
  )
}

export default App
