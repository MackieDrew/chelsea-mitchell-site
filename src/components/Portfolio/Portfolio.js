import React from 'react'
import './Portfolio.scss'
import { Grid, Row, Col } from 'react-bootstrap'


const PortfolioImage = (props) =>
  <Row>
    <Col md={12}>
      <img className="portfolio-image" src={props.url} alt={`${props.title} - ${props.description}`} />
      <div class="portfolio-image__caption">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Col>
  </Row>

const Portfolio = (props) => {
  return (
    <Grid>
      <PortfolioImage
        title="Simpsons"
        url="http://i.imgur.com/sFdTvpL.gif"
        description="This is some random image for test purposes."
      />
    </Grid>
  )
}

export default Portfolio