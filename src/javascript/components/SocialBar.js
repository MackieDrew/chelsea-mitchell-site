import React from 'react'
import SocialBadge from 'react-social-badge'

const SocialBar = (props) =>
  <div className="Social row">
    <SocialBadge url="http://tumblr.com/" />
    <SocialBadge url="http://instagram.com/" />
    <SocialBadge url="http://twitter.com/" />
  </div>

export default SocialBar;
