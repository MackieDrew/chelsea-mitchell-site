import React from 'react'
import './Landing.scss'
import { Grid, Row, Col } from 'react-bootstrap'
import logo from '../../images/logo.png'

const Landing = () =>
  <Grid fluid className="landing landing__growing-portion">
    <Row>
      <Col>
        <img alt="Chelsea" className='logo' src={logo}></img>
      </Col>
    </Row>
  </Grid>

export default Landing