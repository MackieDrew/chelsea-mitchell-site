import React from 'react'
import '../../scss/components/FrontView.scss'
import Slideshow from './Slideshow'
import FrontOverlay from './FrontOverlay'

const FrontView = (props) => 
  <div className="FrontView row">
    <Slideshow />
    <FrontOverlay />
  </div>

export default FrontView;
