import React from 'react';
import Scroll from 'react-scroll';
import Modal from 'react-modal'
import ParticleNodes from './interactiveNodes/particles.js';

import '../styles/index.css';
import ProjectsData from './Projects/Projects-Data.js'
import Projects from './Projects/Projects.js'
import ProjectDetails from './Projects/ProjectDetails.js';
import Resume from './Resume/Resume.js';
import About from './About/About.js'
import Footer from './Footer/Footer.js'
// import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      projectToDisplay: '',
      imageIsReady: false
    };
    // Doesnt allow aria to read background when modal is open
    Modal.setAppElement('body');
    this.toggleModal = this.toggleModal.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  scrollToTop() {
    Scroll.animateScroll.scrollToTop();
  }

  projectDetails() {
    if(this.state.projectToDisplay === 'resume'){
      return (
        <Modal
          className='project-modal'
          isOpen={ this.state.modalOpen }
          onRequestClose={this.toggleModal}
          contentLabel='Resume'
        >
          <Resume
            toggleModal={ this.toggleModal }
          />
        </Modal>
      );
    } else {
      const projectToDisplay = ProjectsData.find(project =>
        project.title === this.state.projectToDisplay,
      );
      return (
        <Modal
          className='project-modal'
          isOpen={ this.state.modalOpen }
          onRequestClose={this.toggleModal}
          contentLabel='Project Details'
        >
          <ProjectDetails
            { ...projectToDisplay }
            toggleModal={ this.toggleModal }
          />
        </Modal>
      );
    }
  }

  toggleModal(name) {
    if (!this.state.modalOpen) {
      this.setState({ modalOpen: true, projectToDisplay: name });
    } else {
      this.setState({ modalOpen: false, projectToDisplay: '' });
    }
  }

  preventTextSelectionOnDblClick(e) {
    if (e.detail > 1) {
      e.preventDefault();
     }
  }

  componentDidMount() {
    const img = new Image();
    img.src = require('../styles/images/new-background-trees1.png'); // by setting an src, you trigger browser download

    img.onload = () => {
      // when it finishes loading, update the component state
      this.setState({
        imageIsReady: true
      });
    }
  }

  render() {
    const { imageIsReady } = this.state;
    if (!imageIsReady) {
      return <div className='default-background'></div>; // or just return null if you want nothing to be rendered.
    } else {
      return (
        <div className="App"
            onMouseDown={ (e) => this.preventTextSelectionOnDblClick(e) }>
          <ParticleNodes/>
          <img src={require('../styles/images/new-background-trees1.png')} alt='black sillouette of pine trees as foreground' className='landing-trees'/>

          { this.projectDetails() }
          <section id='header'>
            <section id='name'>
              <h1> adam<span id='period'>.</span>carpenter </h1>
              <h2 id='title' className='employment-field'>
                <span>S</span><span>o</span><span>f</span><span>t</span>
                <span>w</span><span>a</span><span>r</span><span>e</span> &nbsp;
                <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span>
                <span>p</span><span>e</span><span>r</span>
              </h2>
            </section>
            <button
              id='scroll-btn'
              type='button'
              title='Learn More About Adam'
              onClick={ () => this.scrollToAbout() }>
            </button>
          </section>
          <About toggleModal={ this.toggleModal } />
          <Projects toggleModal={ this.toggleModal } />
          <Footer scrollToTop={ this.scrollToTop } />
        </div>
      );
    }
  }
}


export default App;
