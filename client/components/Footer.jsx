import React from 'react'
import {Link} from 'react-router-dom'

function Footer () {
  return (
    <footer>
      <div className='container'>
        <div className='col-sm-4'>
          <h2>About</h2>
          <img src='/images/smanongga-logo-small.png' alt='smanongga.github.io logo' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt augue quis dui eleifend, ac dictum nulla pellentesque. Donec bibendum mauris vitae arcu lacinia, mollis consectetur dolor lacinia. </p>
        </div>
        <div className='col-sm-4'>
          <h2>Menu</h2>
          <ul className='menu'>
            <li><Link to='/page/about-me'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
          </ul>
        </div>
        <div className='col-sm-4'>.
        </div>
      </div>
    </footer>
  )
}

export default Footer
