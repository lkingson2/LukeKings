import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Routes from '../Components/Routes'
import { BrowserRouter as Router } from "react-router-dom";
import '../Style/App.css';
import 'tachyons'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    )
  }
}

export default App;
