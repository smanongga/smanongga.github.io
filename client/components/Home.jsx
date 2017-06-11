import React from 'react'

import RecentBlogs from './RecentBlogs'
import RecentProjects from './RecentProjects'
import { getRecentBlogs, getRecentProjects } from '../api'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recentBlogs: [],
      recentProjects: [],
      errorMessage: ''
    }
    this.fetchRecentBlogs = this.fetchRecentBlogs.bind(this)
    this.fetchRecentProjects = this.fetchRecentProjects.bind(this)
  }

  componentWillMount () {
    this.fetchRecentBlogs()
    this.fetchRecentProjects()
  }

  fetchRecentBlogs () {
    return getRecentBlogs()
    .then(blogs => {
      this.setState({ recentBlogs: blogs })
    })
    .catch(err => {
      this.setState({ errorMessage: err.message })
    })
  }

  fetchRecentProjects () {
    return getRecentProjects()
    .then(projects => {
      this.setState({ recentProjects: projects })
    })
    .catch(err => {
      this.setState({ errorMessage: err.message })
    })
  }

  render () {
    return (
      <div>
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
        <div className='container blog-frontpage'>
          <RecentBlogs blogs={this.state.recentBlogs} />
          <RecentProjects projects={this.state.recentProjects} />
        </div>
      </div>
    )
  }
}
export default Home
