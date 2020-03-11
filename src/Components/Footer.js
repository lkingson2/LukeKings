import React from 'react'
import moment from 'moment'
import '../Style/Footer.css'
import '../Style/Flex.css'

const Footer = () => {

  //Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  return (
    <div className="fixed--bottom">
      <div className="footer flex">
        <div className="flex flex--space">
          <div className="footer footer--disclaimer justify--start">
            <p>Luke Kingsley, {moment().year()}.</p>
          </div>
        </div>
        <a href={require('../Images/LukeKingsleyResume.pdf')} download="luke_kingsley_resume.pdf" target="_blank" rel="noopener noreferrer">
          <button type="button" className="flex flex--item">
            <div className="footer--action">
              <img src={require('../Images/resume.png')} alt="Resume" id="resume"/>
            </div>
          </button>
        </a>
        <a href="https://github.com/lkingson2" target="_blank" rel="noopener noreferrer">
          <button type="button" className="flex flex--item">
            <div className="footer--action">
              <img src={require('../Images/github.svg')} alt="Github" />
            </div>
          </button>
        </a>
        <a href="mailto:lkingson2@gmail.com" rel="noopener noreferrer">
          <button type="button" className="flex flex--item">
            <div className="footer--action">
              <img src={require('../Images/email.svg')} alt="Contact Me" />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
