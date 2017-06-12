import React from 'react'

import ProjectSummary from './projects/ProjectSummary'

function RecentProjects (props) {
  return (
    <div className='container'>
      <h2 className='title'>Recent Projects</h2>
      <div className='row'>
        <div className='col-sm-12 blog-main'>
          <div className='flex-box'>
            {props.projects.map((project, i) => {
              return <ProjectSummary
                key={i}
                project={project} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
