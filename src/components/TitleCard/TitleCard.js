import React from 'react'
import './TitleCard.scss'

// Stateless functional component, deconstructing props in the parameters
const Landing = ({opacity, img}) => {
  // Construct background attribute for short form reference in style object construction
  const background = `url('images/marquee/${img}.jpg')`
  // Construct in-line style object for opacity and background image
  const style = { opacity, background }
  // Return title card
  return <div className="title-card" style={style}></div>
}

export default Landing