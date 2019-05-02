import React from 'react';
import './About.css'

import Skills from '../Skills/Skills';

const About = ({ toggleModal }) => {

  return (
    <section id='about'>

      <article className='who-am-i-section'>

        <h2>About</h2>
        <div className='about-container'>
        <p className='about1'>
          My name is Adam Carpenter and I am a creative problem-solver dedicated to producing clean, modular, testable code. With an insatiable appetite for knowledge, I strive to encourage communication, creativity, and critical thinking in those who surround me.
          <br/>
          <br/>
          After 10 years of working as a traveling musician and a few years in the telecommunications industry I became a software developer.  As such, I get to merge my passion for creativity, technology and problem solving into a sustainable career in a progressive industry.  I have a passion for creating websites and applications that are intuitive, accessible and generally make peoples lives a little easier.
        </p>
        <br/>
        <br/>
        <div className='about2'>
          My strong communication and critical thinking skills make me an enthusiastic and valuable team member.  My background in philosophy and work as a musician has made me very adept at  problem solving and collaboration.  Previous experience includes racking, stacking and cabling within data centers as well as installing, troubleshooting and training on desktop/laptop computers, network devices and security systems.
          <br/>
          <br/>
          An all around music lover, musician, fisherman and outdoor enthusiast.
          <br/>
          <br/>
          Read more about me via my
          <a href="https://www.linkedin.com/in/adam-joseph-carpenter/" target='_blank' rel="noopener noreferrer">
            &nbsp;LinkedIn,&nbsp;
          </a>
          through my
          <p
          onClick={() => toggleModal('resume')}
          className='resumeDisplay'> resume
          </p>
          or contact me directly by email
          <a href="mailto:adamcarpenter86@gmail.com">
            &nbsp;here
          </a>.
        </div>
        </div>
      </article>
      <div>


      <Skills />
      </div>
    </section>
  );
};


export default About;
