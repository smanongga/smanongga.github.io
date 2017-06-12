import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Blogs from './blogs/BlogsIndex'
import BlogPost from './blogs/BlogPost'
import Footer from './Footer'

const App = (props) => (

  <Router>
    <div className='app'>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Switch>
        <Route exact path='/blogs' component={Blogs} />
        <Route path='/blog/:id' component={BlogPost} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App
