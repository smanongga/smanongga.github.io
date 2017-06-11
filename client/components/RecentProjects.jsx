import React from 'react'

import ProjectSummary from './ProjectSummary'

function RecentProjects (props) {
  console.log(props)
  return (
    <div>
      <h2 className='title'>Recent Projects</h2>
      <div className='row'>
        <div className='col-sm-12 blog-main'>
          <div className='flex-box'>
            {props.projects.map(project => {
              return <ProjectSummary
                key={project.id}
                project={project} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
