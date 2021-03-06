import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer' className='footer-div'>
      <section className='contact-section'>
        <a
          className='footer-icon github'
          href='https://github.com/Adamj1232'
          target='_blank'
          rel="noopener noreferrer"
          title='Github'>
        </a>
        <a
          className='footer-icon linkedin'
          href='https://www.linkedin.com/in/adam-joseph-carpenter/'
          target='_blank'
          rel="noopener noreferrer"
          title='Linkedin'>
        </a>
        <a
          className='footer-icon twitter'
          href='https://twitter.com/AllBassdUp'
          target='_blank'
          rel="noopener noreferrer"
          title='Twitter'>
        </a>
        <a
          className='footer-icon resume'
          download="ACarpenter-Resume-2020.pdf"
          href = {
              require("../../styles/images/Adam_Carpenter_Software_Developer_Resume.pdf")
          }
          title='Download Resume'>
        </a>
        <a
          className='footer-icon email'
          href='mailto:adamcarpenter86@gmail.com'
          title='Email'>
        </a>
      </section>
      <section className='top-copyright'>
        <h4 className='footer-tag'>{'\u00A9'} Adam Carpenter | 2020 </h4>
      </section>
    </div>
  );
};

export default Footer;
