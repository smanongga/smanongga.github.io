import React from 'react'
import {Link} from 'react-router-dom'

const BlogSummary = (props) => {
  const blog = props.blog
  return (
    <div className='blog-post'>
      <h2 className='blog-post-title'><Link className='blog' to={`/blog/${blog.slug}`}>{blog.title}</Link></h2>
      <a href={`/blogs/${blog.slug}`}><img src={blog.image} alt='{blog.title}' /></a>
      <div className='blog-post-entry'>
        <p>{blog.summary}</p>
        <hr />
        <a className='read-more' href={`/blogs/${blog.slug}`}>READ MORE &raquo;</a>
      </div>
    </div>
  )
}

export default BlogSummary
