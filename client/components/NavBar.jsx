import React from 'react'
import {Link} from 'react-router-dom'

function Header () {
  return (
    <nav className='navbar navbar-default navbar-static-top frontpage'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand' href='/'></a>
        </div>
        <div id='navbar' className='navbar-collapse collapse navbar-right'>
          <ul className='nav navbar-nav'>
            <li className='active'><a href='/'>Home</a></li>
            <li><Link to='/page/about-me'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
