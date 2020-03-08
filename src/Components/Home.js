import React from 'react'
import '../Style/Home.css'

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Title">DEVELOPER.</h1>
      <a className="Button Fill" href="/resume.pages">Resume</a>
      <span></span>
      <a className="Button Outline" href="https://github.com/lkingson2">Github</a>
    </div>
  )
}

export default Home;
