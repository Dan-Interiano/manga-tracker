import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div className='about-container'>
      <img className="about-img" src="./assests/about-image.jpg" alt="manga images"/>
      <h1 className='about-title'>About Us</h1>
      <div className='right-div'>
        <h3>Right</h3>
      </div>
      <div className='left-div'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}
