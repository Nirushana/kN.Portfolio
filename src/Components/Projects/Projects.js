import React from 'react'
import projectStyles from "./projectsStyle.css"
import Works from './Works'

function Projects() {
  return (
    <div className='projectsContainer'>
      <section className="headerWorkSection" id='portfolio'>
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">My Most Recent Work</span>
      </section>
      <section className='bodyWorkSection'>
      <Works />
      </section>
    </div>
  )
}

export default Projects
