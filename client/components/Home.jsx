import React from 'react'

import HeroVideo from './HeroVideo'
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
        <HeroVideo />
        <div className='blog-frontpage'>
          <RecentBlogs blogs={this.state.recentBlogs} />
          <RecentProjects projects={this.state.recentProjects} />
        </div>
      </div>
    )
  }
}
export default Home
