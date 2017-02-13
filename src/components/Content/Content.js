import React from 'react'
import './Content.scss'
import { Grid, Row, Col } from 'react-bootstrap'
import Portfolio from '../Portfolio/Portfolio'


const ListLink = (props) => {

  const link = props.name.toLowerCase()

  return (
    <li>
      <a href={`#${link}`}>
        <p>
          {props.name}
        </p>
      </a>
    </li>
  )
}

const Content = () =>
  <Grid fluid className="content">
    <Row className="portfolio">
      
      <Col className="index hidden-lg">
        <ul className="section-list-mobile">
          <ListLink name="Visual Development" />
          <ListLink name="Layout" />
          <ListLink name="Modelling" />
          <ListLink name="Resume" />
          <ListLink name="Contact" />
        </ul>
      </Col>

      <Col lg={3} className="index visible-lg">
        <ul className="section-list">
          <ListLink name="Visual Development" />
          <ListLink name="Layout" />
          <ListLink name="Modelling" />
          <ListLink name="Resume" />
          <ListLink name="Contact" />
        </ul>
      </Col>

      <Col lg={9} className="images">
        <Portfolio />
      </Col>
    </Row>
  </Grid>

export default Content