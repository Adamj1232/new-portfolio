import React from 'react';
import ProjectsData from './Projects-Data.js';
import './Projects.css';
import MainView from './Image-Carousel/image-carousel.js';


const Projects = ({ toggleModal }) => {
  const allProjects = ProjectsData.map((project, i) => {
    const { title, image, gitHubRepo, siteURL, icons } = project;
    if (!siteURL && !gitHubRepo) {
      return (
        <article className="each-project" key={i}>
          <img
            className="project-image"
            src={require(`${image}`)}
            alt={`Screenshot of my ${title} project`}
          />
          <div className="article-layer">
            <h3>{title}</h3>
            <h5>Enterprise Software - Codebase and URL Unavailable</h5>
            <button
              className="project-button"
              onClick={() => toggleModal(title)}
            >
              More Details
            </button>
          </div>
        </article>
      );
    } else if (!siteURL) {
      return (
        <article className="each-project" key={i}>
          <img
            className="project-image"
            src={require(`${image}`)}
            alt={`Screenshot of my ${title} project`}
          />
          <div className="article-layer">
            <h3>{title}</h3>
            <a
              href={gitHubRepo}
              target="_blank"
              rel="noopener noreferrer"
              title="Github Repo"
            >
              <img
                className="project-icons"
                src={require(`${icons.git}`)}
                alt="icon of github cat"
              />
            </a>
            <button
              className="project-button"
              onClick={() => toggleModal(title)}
            >
              More Details
            </button>
          </div>
        </article>
      );
    } else {
      return (
        <article className="each-project" key={i}>
          <img
            className="project-image"
            src={require(`${image}`)}
            alt={`Screenshot of my ${title} project`}
          />
          <div className="article-layer">
            <h3>{title}</h3>
            <div>
              <a
                href={siteURL}
                target="_blank"
                rel="noopener noreferrer"
                title="Website"
              >
                <img
                  className="project-icons"
                  src={require(`${icons.site}`)}
                  alt="icon of laptop"
                />
              </a>
              <a
                href={gitHubRepo}
                target="_blank"
                rel="noopener noreferrer"
                title="Github Repo"
              >
                <img
                  className="project-icons"
                  src={require(`${icons.git}`)}
                  alt="icon of github cat"
                />
              </a>
            </div>
            <button
              className="project-button"
              onClick={() => toggleModal(title)}
            >
              More Details
            </button>
          </div>
        </article>
      );
    }
  });

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-wrapper">{allProjects}</div>
      <MainView/>
    </section>
  );
};

export default Projects;
