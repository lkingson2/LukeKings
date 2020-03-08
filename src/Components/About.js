import React from 'react'
import '../Style/About.css'

const About = () => {
  return (
    <div className="AboutMe">
      <div className="AboutProfilePic">
        <img alt="Me" src={require('../Style/profile_pic.jpeg')}/>
      </div>
      <div className="AboutDescription">
        <h1>About Me</h1>
        <h2>
            I am a software engineer at Qualcomm working on
            machine learning and computer vision based solutions
            for automation. Outside out work I enjoy working on
            different side projects such as PubHob, a nightlife social media
            platform I started with my friends. Unrelated to programming
            my interests include hiking, skiing, biking and
            traveling.
        </h2>
      </div>
    </div>
  )
}

export default About;
