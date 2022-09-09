import React, { useState } from 'react'

import { Container, Row, Col, Nav, Collapse} from 'react-bootstrap'
import { FiSettings } from 'react-icons/fi'

import './navside.css'

const NavSide = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className='container__navbar'>
      
      <div className='position-absolute p-3 bg-light' 
        id="collapse-icon-box"
        onClick={() => setOpen(!open)}
        aria-controls='side-bar'
        aria-expanded={open}
        >
        <FiSettings />
      </div>
      
      
      <Container fluid>
        <Row>
          <Collapse in={open} dimension="width">
            <div className='col-auto min-vh-100 bg-light' id='side-bar'>
              
              
            </div>
          </Collapse>
        </Row>
      </Container>
    
    </div>
  )
}

export default NavSide