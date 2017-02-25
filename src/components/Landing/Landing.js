import React from 'react'
import './Landing.scss'
import { Grid, Row, Col } from 'react-bootstrap'
import logo from '../../images/logo.png'

const Landing = () =>
  <Grid fluid className="landing">
    <Row className="landing__growing-portion visible-lg">
      <Col>
        <img alt="Chelsea Mitchell Logo" className='logo' src={logo}></img>
      </Col>
    </Row>
    
    <Row className="landing__growing-portion-mobile hidden-lg">
      <Col>
        <img alt="Chelsea Mitchell Logo" className='logo' src={logo}></img>
      </Col>
    </Row>

  </Grid>

export default Landing