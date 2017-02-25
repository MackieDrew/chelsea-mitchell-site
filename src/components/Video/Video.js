import React from 'react'
import './Video.scss'
import { Grid, Row, Col } from 'react-bootstrap'

const Video = (props) =>
<div className={props.className} style={props.style}>
  <iframe
    width="100%"
    height="auto"
    src="https://www.youtube.com/embed/1oj2DUWRlAc?rel=0&amp;autostart=0;controls=0&amp;showinfo=0"
    frameBorder="0"
  ></iframe>
  </div>

export default Video