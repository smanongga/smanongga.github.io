import React from 'react'

const ProjectSummary = (props) => {
  const project = props.project
  return (
    <div>
      <div className='blog-post'>
        <h2 className='blog-post-title'><a className='blog' href='/blog/{blog.id}'>{project.projectTitle}</a></h2>
      </div>
    </div>
  )
}

export default ProjectSummary
