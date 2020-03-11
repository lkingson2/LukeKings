import React from 'react'
import '../Style/About.css'

const About = () => {
  return (
    <div className="page">
      <div className="about--container">
        <div className="about--image">
          <div className="about--photo" />
        </div>
        <div className="about--text">
          <h1 style={{margin:0}}>About Me</h1>
          <div style={{width:"32px", height:"32px"}}/>
          <p className="copy">I'm a software engineer based in San Diego.</p>
          <div style={{width:"16px", height:"16px"}}/>
          <p className="copy">Currently, I am working on machine learning and computer vision based solutions for my teams automation framwork.</p>
          <div style={{width:"16px", height:"16px"}}/>
          <p className="copy">Outside out work I enjoy working on different side projects such as PubHob, a nightlife social media platform I started with my friends. Unrelated to programming my interests include hiking, skiing, biking and traveling.</p>
          <div style={{width:"16px", height:"16px"}}/>
          <p className="copy">Contact me at <a href="mailto:lkingson2@gmail.com">lkingson2@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
