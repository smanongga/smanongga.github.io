import React from 'react'

import BlogSummary from './BlogSummary'

function RecentBlogs (props) {
  return (
    <div>
      <h2 className='title'>Recent Blog Posts</h2>
      <div className='row'>
        <div className='col-sm-12 blog-main'>
          <div className='flex-box'>
            {props.blogs.map(blog => {
              return <BlogSummary
                key={blog.id}
                blog={blog} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogs
