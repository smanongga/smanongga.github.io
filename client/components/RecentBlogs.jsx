import React from 'react'

import BlogSummary from './blogs/BlogSummary'

function RecentBlogs (props) {
  return (
    <div className='container'>
      <h2 className='title'>Recent Blog Posts</h2>
      <div className='row'>
        <div className='col-sm-12 blog-main'>
          <div className='flex-box'>
            {props.blogs.map((blog, i) => {
              return <BlogSummary
                key={i}
                blog={blog} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogs
