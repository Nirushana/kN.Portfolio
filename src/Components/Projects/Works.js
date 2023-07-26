import React from 'react'
import { projectsData, projectNav } from './data'

function Works() {
  return (
    <div>
      <div className='work_filters'>
        {projectNav.map((item, index) => {
          return (
            <span className='work_items' key={index}>{item.name}</span>
          )
        })}
      </div>

      <div className='work_container container grid'>
        {projectsData.map((item) =>{
          return <WorksItems />
        })}
      </div>
    </div>
  )
}

export default Works
