import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavSide from './components/header/NavSide'
import Todo from './components/body/Todo'
import About from './components/about/About'

const App = () => {
  return (
    <Router>
      <NavSide />
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/About' element ={<About />} />
      </Routes>
    </Router>
  )
}

export default App