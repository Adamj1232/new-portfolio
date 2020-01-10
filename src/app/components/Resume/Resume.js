import React from 'react'
import './Resume.css'
import ResumeImg from '../../styles/images/Adam_Carpenter_Software_Developer_Resume.pdf'

const Resume = ({ toggleModal }) => {
  return(
    <section className='project-details resume-modal'>
      <h2 className='project-detail-header'>
        Current Resume
      </h2>
      <iframe
        src={ ResumeImg }
        title="Adam Carpenter Current Resume"
        height="620" width="100%"
        frameBorder="0"
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
        href = {ResumeImg}
        download = 'Adam_Carpenter_Software_Developer_Resume'
        title='Download Resume'>
        &nbsp;here
      </a>
      to download my resume
      </h3>
    </section>
  )
}

export default Resume
