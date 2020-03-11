import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import {
  Switch,
  Route
} from 'react-router-dom'

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact Title="Send Me a Message"/>
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes;
