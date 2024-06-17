import React from 'react'


function WebAppProjectCard({src, link, h3}) {
  return (
    <a href={link}>
    <img className="hover" src={src} alt={`${h3} logo`} />
    <h3>{h3}</h3>
    <p>Website Project I made in my OJT</p>
    </a>
  )
}

export default WebAppProjectCard