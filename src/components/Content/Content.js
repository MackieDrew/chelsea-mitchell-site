import React from 'react'
import './Content.scss'
import { Grid, Row } from 'react-bootstrap'

const Content = () =>
  <Grid fluid className="content">
    <Row className="portfolio">
      <Col className="">Index</Col>
      <Col>Portfolio Images/Videos</Col>
    </Row>
    <Row>
      Portfolio
      </Row>
  </Grid>

export default Content