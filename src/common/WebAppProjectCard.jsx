import React from 'react'


function WebAppProjectCard({src, link, h3}) {
  return (
    <a href={link}>
    <img className="hover" src={src} alt={`${h3} logo`} />
    <h3>{h3}</h3>
    </a>
  )
}

export default WebAppProjectCard