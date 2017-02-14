import React from 'react'
import './Portfolio.scss'
import { Grid, Row, Col } from 'react-bootstrap'
import Video from '../Video/Video'

const PortfolioItem = (props) => {

  const {url, title, description, type} = props

  const content = type === 'video' ?
    <Video className="portfolio-video" /> :
    <img className="portfolio-image" src={url} alt={`${title} - ${description}`} />



  return (
    <Row>
      <Col md={12}>
        {content}
        <div className="portfolio-image__caption">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Col>
    </Row>
  )
}

const PortfolioImage = (props) =>
  <PortfolioItem
    {...props}
    type='image'
  />

const PortfolioVideo = (props) =>
  <PortfolioItem
    {...props}
    type='video'
  />

const Portfolio = (props) => {
  return (
    <Grid>
      <PortfolioImage
        title="Simpsons"
        url="http://i.imgur.com/sFdTvpL.gif"
        description="This is some random image for test purposes."
      />
      <PortfolioVideo />
    </Grid>
  )
}

export default Portfolio