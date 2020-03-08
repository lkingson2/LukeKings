import React from 'react';
import NavBar from '../Components/NavBar'
import Routes from '../Components/Routes'
import { BrowserRouter as Router } from "react-router-dom";
import '../Style/App.css';
import 'tachyons'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </div>
    )
  }
}

export default App;
