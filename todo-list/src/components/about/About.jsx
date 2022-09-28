import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { ImEarth } from 'react-icons/im'

import './about.css'
import ME from '../../assets/ryan.jpg'

const About = () => {
  return (
    <div className='d-flex flex-column align-items-center about__container'>
      <div className='d-flex justify-content-center align-items-end mb-2 text-center about__banner'>
        <h3 style={{'color':'white', 'fontWeight':'bolder'}}>About This App</h3>
      </div>

      <div className='d-flex flex-column justify-content-start align-items-center w-100 h-100 info__container'>
        <div className='mt-5 mb-2 pt-5'>
          <img src={ME} alt="" className='img-me' />
        </div>

        <div className='mt-5 mb-5'>
          <p>This is a React tutorial built in the Github Repository.</p>
        </div>
        
        <div className='d-grid gap-4'>
          <a href="https://github.com/ryancho-hakhyeon/ToDo-list" target="_blank" rel="noreferrer">
            <div style={{ width:300 , backgroundColor:'black', borderRadius:20 }} className='d-flex justify-content-center align-items-center'>
              <BsGithub className='me-2'/>
              <span>Github</span>
            </div>
          </a>

          <a href="https://ryanchoportfolio.netlify.app/" target="_blank" rel="noreferrer">
            <div style={{width:300, backgroundColor:'purple', borderRadius:20}} className='d-flex justify-content-center  align-items-center'>
              <ImEarth className='me-2'/>
              <span>WebPage</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About