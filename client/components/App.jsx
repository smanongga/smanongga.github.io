import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {BrowserHistory} from 'react-router'

import Home from './Home'
import BlogList from './BlogList'

class App extends React.Component {
  render () {
    return (
      <Router history={BrowserHistory}>
        <div className='app'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/blogs' component={BlogList} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(App)
