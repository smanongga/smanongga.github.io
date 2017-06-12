import React from 'react'

function HeroVideo () {
  return (
    <div className='col-sm-12 hero-subheader'>
      <video width='300' height='150' autoPlay='autoplay' loop='loop' className='video'>
        <source src='/video/Aloha-Mundo.mp4' type='video/mp4' />
        <source src='/video/Aloha-Mundo.ogv' type='video/ogg' />
        <source src='/video/Aloha-Mundo.webm' type='video/webm' />
      </video>
      <div className='container'>
        <div className='message'>
          <center>
            <h1 className='lead'>Kia Ora!</h1>
            <h2 className='follow'>My name is <span className='red'>Sam Manongga</span>. <br />I'm a <span className='red'>web developer</span> living in <span className='red'>Auckland, New Zealand</span></h2>
          </center>
        </div>
      </div>
    </div>
  )
}

export default HeroVideo
