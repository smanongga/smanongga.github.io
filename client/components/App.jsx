import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'

const App = (props) => (

  <Router>
    <div className='app'>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Footer />
    </div>
  </Router>
)

export default App
