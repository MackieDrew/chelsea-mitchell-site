import React from 'react'
import logo from '../../image/logo.png'

const Logo = (props) =>
  <div className="container-fluid">
    <div className="row">
        <img src={logo} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 offset-xl-3 offset-lg-3 offset-md-3 offset-sm-3 img-fluid center-block Logo" alt="CM Logo" />
    </div>
  </div>

export default Logo;
