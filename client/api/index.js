import request from 'superagent'

export function getRecentBlogs () {
  return request.get('/api/v1/blogs')
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
