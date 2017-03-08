import React from 'react'
import './Landing.scss'
import Logo from '../../images/logo.svg'

const Landing = () =>
  <div className="container-fluid landing">
    <div className="row overlay">
      <Logo className='col logo' />
    </div>
  </div>

export default Landing