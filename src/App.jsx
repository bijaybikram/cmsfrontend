import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Useeffect from './pages/Useeffect/Useeffect'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/useeffect'  element={<Useeffect/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
