import React from 'react'

function SocialMedia () {
  return (
    <div className='sidebar-container social-media'>
      <h4>Social Media</h4>
      <hr />
      <ol className='list-unstyled'>
        <li><a href='https://github.com/smanongga' target='_blank'><i className='fa fa-github fa-2x'></i> </a></li>
        <li><a href='https://www.freecodecamp.com/smanongga' target='_blank'><i className='fa fa-free-code-camp fa-2x'></i> </a></li>
        <li><a href='https://www.linkedin.com/in/smanongga/' target='_blank'><i className='fa fa-linkedin-square fa-2x'></i> </a></li>
        <li><a href='https://www.facebook.com/sam.manongga'><i className='fa fa-facebook-official fa-2x'></i> </a></li>
      </ol>
    </div>
  )
}

export default SocialMedia
