import React from 'react'

import "./Button.css"

const Button = (props) => {
  // destructured props
  const {onClick, name} = props; 

  return (
    <div className='btn'>
        <button className="button" onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button