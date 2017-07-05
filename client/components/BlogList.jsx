import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getAllBlogs} from '../actions'

class BlogList extends React.Component {
  componentDidMount () {
    this.props.fetchBlogPosts()
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          {this.props.blogList.map((blog, i) => {
            return (
              <Link to={`/blogs/$blog.id`} key={i}>
                <div>{blog.title}</div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (dispatch) {
  return {
    fetchBlogPosts: () => {
      dispatch(getAllBlogs())
    }
  }
}

function mapDispatchToProps (state) {
  return {
    blogList: state.blogs
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogList)
