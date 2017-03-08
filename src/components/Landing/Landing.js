import React, { Component } from 'react'
import './Landing.scss'
import Logo from '../../images/logo.svg'

import TitleCard from '../TitleCard/TitleCard'

const marqueeInterval = 3 // seconds

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      max: 13,
      secondsElapsed: 0,
    }

    this.tick = this.tick.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
  }

  tick() {
    const { current, max, secondsElapsed } = this.state
    this.setState({
      current: (current === max) ? 1 : current + 1,
      secondsElapsed: secondsElapsed + marqueeInterval,
    })

  }

  componentDidMount() {
    this.interval = setInterval(this.tick, marqueeInterval * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="container-fluid landing">
        <div className="row overlay">
          <TitleCard opacity={1.00} img={this.state.current} />
          <Logo className='col logo' />
        </div>
      </div>
    )
  }
}

export default Landing