import React from 'react'

function AboutMe () {
  return (
    <div className='sidebar-module sidebar-module-inset'>
      <img className='bg-image' src='/images/auckland-skyline.jpg' alt='Image of Auckland skyline' />
      <img className='profile' src='/images/sam-profile.gif' alt='Profile: Sam Manongga' />
      <h4 className='profile-name'>Sam Manongga</h4>
      <div className='sidebar-container'>
        <hr />
        <p>Hi. My name is Sam Manongga.<br />
        I am a student at <a href='https://www.devacademy.co.nz/' target='_blank'>Enspiral Dev Academy</a>.<br />
        This space will record my 18 weeks journey
        in web development.</p>
      </div>
    </div>
  )
}

export default AboutMe
