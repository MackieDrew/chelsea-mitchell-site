import React from 'react'
import './Landing.scss'
import logo from '../../images/logo.png'





const Landing = () =>
  <div fluid className="container-fluid landing">
    <div className="row landing__growing-portion">
      <div className="col">
        <img alt="Chelsea Mitchell Logo" className='logo' src={logo}></img>
      </div>
    </div>

  </div>

export default Landing