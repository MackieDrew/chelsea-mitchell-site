import React from 'react'
import SocialBadge from 'react-social-badge'

const SocialBar = (props) =>
  <div className='Social row'>
    <SocialBadge badgeColor='rgb(45, 45, 45)' url='http://tumblr.com/' />
    <SocialBadge badgeColor='rgb(45, 45, 45)' url='http://instagram.com/' />
    <SocialBadge badgeColor='rgb(45, 45, 45)' url='http://twitter.com/' />
  </div>

export default SocialBar;
