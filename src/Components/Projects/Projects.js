import React from 'react'
import projectStyles from "./projectsStyle.css"
import Works from './Works'

function Projects() {
  return (
    <section className="workSection" id='portfolio'>
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">My Most Recent Work</span>
    
    <Works />
    </section>
  )
}

export default Projects
