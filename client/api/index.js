import request from 'superagent'

export function getRecentBlogs () {
  return request.get('/api/v1/recent-blogs')
    .then(data => {
      const blogs = data.body
      return blogs
    })
    .catch(err => {
      throw Error('Cannot GET Posts!')
    })
}

export function getRecentProjects () {
  return request.get('/api/v1/projects')
    .then(data => {
      const projects = data.body
      return projects
    })
    .catch(err => {
      throw Error('Cannot GET Posts!')
    })
}

export function getBlogs () {
  return request.get('/api/v1/blogs')
    .then(data => {
      const blogs = data.body
      return blogs
    })
    .catch(err => {
      throw Error('Cannot GET Posts!')
    })
}

export function getBlogsById (id) {
  return request.get(`/api/v1/blogs/${id}`)
    .then(data => {
      const blog = data.body[0]
      return blog
      console.log('blog', blog)
    })
    .catch(err => {
      throw Error('Cannot GET Posts!')
    })
}
