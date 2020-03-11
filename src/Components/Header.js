import React from 'react'
import { Link } from "react-router-dom";
import '../Style/Header.css'

const Header = () => {
  // <Link className="header--menu" to="/about" >About</Link>
  // <Link className="header--menu" to="/projects" >Projects</Link>
  // <Link className="header--menu outline" to="/contact" >Contact</Link>
  return (
    <div className="fixed--top">
      <div className="header flex">
        <div className="flex flex--space">
          <div className="header--logo flex justify--start">
            <div className="title-name">
              <h1>
                LUKE KINGSLEY
              </h1>
            </div>
          </div>
        </div>
        <nav>
          <Link className="header--menu" to="/" >Home</Link>
          <Link className="header--menu outline" to="/about" >About</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header;
