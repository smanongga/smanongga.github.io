import React from 'react'

import AboutMe from '../AboutMe'
import SocialMedia from '../SocialMedia'
import { getBlogById } from '../../api'

class BlogPost extends React.Component {
  componentDidMount () {
    this.fetchBlog(this.props.match.params.id)
  }

  fetchBlog (id) {
    return getBlogById(id)
    .then(blog => {
      this.setState(blog)
      console.log('blog', blog)
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
            <div className='blog-post'>
              <h2 className='blog-post-title'>{this.props.blog.title}}</h2>
              <div className='blog-post-meta'><i className='fa fa-user-circle-o' aria-hidden='true'></i>
                By <a href='/users/{{profile_id}}'>{this.state.blog.firstName} {this.state.blog.lastName}</a></div>
                <div className='blog-post-meta'><i className='fa fa-calendar' aria-hidden='true'></i>
                  {this.state.blog.publishedDate}
                </div>
                <div className='blog-post-meta'><i className='fa fa-tags' aria-hidden='true'></i> {this.state.blog.tags}
                </div>
                <img src='{this.state.blog.image}' alt='{{this.state.blog.title}}' />
                <div className='blog-post-entry'>
                  <p>{this.state.blog.Body}</p>
                </div>
              </div>
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
export default BlogPost
