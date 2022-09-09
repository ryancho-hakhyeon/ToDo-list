import React, { useState } from 'react'

import { Offcanvas, Nav, Button } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'

import './navside.css'

const NavSide = () => {
  const [open, setOpen] = useState(false)

  const showSidebar = () => setOpen(!open)

  return (
    <>
      <div className="m-3">
        <Button className="shadow" variant='outline-light'><FaBars onClick={showSidebar}/></Button>
      </div>

      <Offcanvas show={open} onHide={showSidebar}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1 className='ms-2'>TODO LIST</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-column pe-3 mb-2">
            <Nav.Link href='/'>Todo List</Nav.Link>
            <Nav.Link href='#'>About</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavSide