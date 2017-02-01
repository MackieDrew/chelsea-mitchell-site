import React from 'react'
import ReactDOM from 'react-dom'
import Slideshow from '../components/Slideshow'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Slideshow />, div)
})
