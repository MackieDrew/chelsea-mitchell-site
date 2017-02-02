import React from 'react'
import '../../scss/components/ContentView.scss'
import Slide1 from '../../image/slideshow/1.png'
import Slide2 from '../../image/slideshow/2.png'
import SocialBar from 'react-social-badge'

const ContentView = (props) => 
  <div className="ContentView row">
    <div className="IndexContainer col-md-4 col-sm-3">
      <div className="Index row">
        Index
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
            <ul>
              <li>VisDev</li>
              <li>Models</li>
              <li>Layout</li>
            </ul>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <SocialBar />
    </div>
    <div className="ContentContainer col-md-8 col-sm-9">
      <div id="portfolio" className="Portfolio row">
        <h1 className="h1">Portfolio</h1>
        <img src={Slide1} alt="Slide1" className="Portfolio__Card img-fluid" />
        <img src={Slide2} alt="Slide2" className="Portfolio__Card img-fluid" />
      </div>
      <div id="resume" className="Resume row">
      </div>
      <div id="contact" className="Contact row">
        Contact
      </div>
    </div>
  </div>

export default ContentView
