import React from 'react'

import AboutMe from '../AboutMe'
import SocialMedia from '../SocialMedia'
import BlogSummary from './BlogSummary'
import { getBlogs } from '../../api'

class BlogsIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      blogs: [],
      errorMessage: ''
    }
    this.fetchBlogs = this.fetchBlogs.bind(this)
  }

  componentWillMount () {
    this.fetchBlogs()
  }

  fetchBlogs () {
    return getBlogs()
    .then(blogs => {
      this.setState({ blogs: blogs })
    })
    .catch(err => {
      this.setState({ errorMessage: err.message })
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 blog-main'>
            {this.state.blogs.map((blog, i) => {
              return <BlogSummary
                key={i}
                blog={blog} />
            })}
          </div>
          <div className='col-sm-4 blog-sidebar'>
            <AboutMe />
            <div className='sidebar-module'>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    )
  }
  }
export default BlogsIndex
