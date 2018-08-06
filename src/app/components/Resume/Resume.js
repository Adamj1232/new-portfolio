import React from 'react'
import './Resume.css'
import ResumeImg from '../../styles/images/ACarpenter_2018_Software_Developer_Resume.pdf'

const Resume = ({ toggleModal }) => {
  return(
    <section className='project-details resume-modal'>
      <h2 className='project-detail-header'>
        Current Resume
      </h2>
      <iframe
        src={ ResumeImg }
        title="Adam Carpenter Current Resume"
        align="top"
        height="620" width="100%"
        frameborder="0"
        scrolling="auto" target="Message">
      </iframe>
      <button
        className='home-button'
        onClick={ () => toggleModal() }>
        X
      </button>
      <h3>
        Please click
      <a
        className='resume-download'
        href="../../styles/images/ACarpenter_Aug2018_Software_Developer_Resume.pdf" download="ACarpenter-Resume-2017"
        title='Download Resume'>
        &nbsp;here
      </a>
      to download my resume
      </h3>
    </section>
  )
}

export default Resume
