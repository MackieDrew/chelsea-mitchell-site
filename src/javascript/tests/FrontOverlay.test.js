import React from 'react'
import ReactDOM from 'react-dom'
import FrontOverlay from '../components/FrontOverlay'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FrontOverlay />, div)
})
