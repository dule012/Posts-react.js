import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import PostInfo from './postInfo/PostInfo'
import Authors from './authors/Authors'
import AuthorInfo from './authorInfo/AuthorInfo'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/post/:id/:userId' component={PostInfo} />
        <Route path='/author/:id' component={AuthorInfo} />
        <Route path='/authors' component={Authors} />
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    )
  }
}

export default App;
