import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavSide from './components/header/NavSide'
import Todo from './components/body/Todo'
// import About from './components/about/About'

const App = () => {
  return (
    <>
      <NavSide />
      <Todo />
      {/* <About /> */}
    </>
  )
}

export default App