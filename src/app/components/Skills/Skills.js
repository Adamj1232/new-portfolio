import React from 'react';
import SkillsList from './SkillsList.js';
import './Skills.css'

const Skills = () => {

  const allSkills = SkillsList.map((skill, i) => {
    const { title, skills, imageClass } = skill;
    const skillLists = skills.map((eachSkill, i) =>
        <span key={i}>{ eachSkill } </span>,
    );
    return (
      <div className='skills-block' key={i}>
        <div className={ imageClass }>
        </div>
        <div className='inner-skills'>
          <h4>{ title }</h4>
          { skillLists }
        </div>
      </div>
    );
  });
  return (
    <article className='skills-section-outter'>
      <div className='skills-wrapper'>
        <h2>Things I Know</h2>
        <section className='skills-section'>
          { allSkills }
        </section>
      </div>
    </article>
  );
};

export default Skills;
