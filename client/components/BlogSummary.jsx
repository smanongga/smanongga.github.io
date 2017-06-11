import React from 'react'

const BlogSummary = (props) => {
  const blog = props.blog
  return (
    <div>
      <div className='blog-post'>
        <h2 className='blog-post-title'><a className='blog' href={`/blog/${blog.slug}`}>{blog.title}</a></h2>
        <div className='blog-post-meta'><i className='fa fa-user-circle-o' aria-hidden='true'></i>
        By <a href={`/users/${blog.profileId}`}>{blog.firstName} {blog.lastName}</a></div>
        <div className='blog-post-meta'><i className='fa fa-calendar' aria-hidden='true'></i>
        {blog.publishedDate}</div>
        <div className='blog-post-meta'><i className='fa fa-tags' aria-hidden='true'></i> {blog.tags}
        </div>
        <a href={`/blog/${blog.slug}`}><img src={blog.image} alt='{blog.title}' /></a>
        <div className='blog-post-entry'>
          <p>{blog.summary}</p>
          <hr />
          <a className='read-more' href={`/blog/${blog.slug}`}>READ MORE &raquo;</a>
        </div>
      </div>
    </div>
  )
}

export default BlogSummary
