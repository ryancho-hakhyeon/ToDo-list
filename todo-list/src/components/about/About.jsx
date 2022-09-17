import React from 'react'
import './about.css'
import ME from '../../assets/ryan.jpg'

const About = () => {
  return (
    <div className='d-flex flex-column align-items-center about__container'>
      <div className='mb-5 text-center about__banner'>
        <p>About This App</p>
      </div>

      <div className='d-flex flex-column justify-content-start align-items-center info__container'>
        <div className='mt-5 mb-2 pt-5'>
          <img src={ME} alt="" className='img-me' />
        </div>

        <div className='mt-5 mb-5'>
          <p>This is a Todo List </p>
        </div>
        
        <div className='mt-5 mb-5'>
          <div>Github</div>
          <div>WebPage</div>
        </div>
      </div>
    </div>
  )
}

export default About