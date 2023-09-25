import React from 'react'
import aboutStyles from "./aboutStyles.css"

function About() {
  return (
    <div className='about_container'>
      <div className='about_left_container'>
        <img src='' alt='Profile Image'/>
      </div>
      <div className='about_right_container'>
        <h1>About Me</h1>
        <h3>Hi! I am Kavinda Nirushana</h3>
        <p>A front-end web and mobile app developer, UI/UX designer, and someone who is passionate about providing the finest service.
          As I continue to advance my abilities and knowledge in the field I work in, I appreciate working on projects that are both demanding and rewarding.
          I'm now finishing up a master's degree in computer science after completing my bachelor's degree as a software engineer. </p>
      <a href='#' className='btn'>VIEW PORTFOLIO.</a>
      </div>
    </div>
  )
}

export default About
