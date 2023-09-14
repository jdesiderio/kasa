import React, { useState } from 'react'
import arrowSvg from '../assets/img/arrow.svg'

const Collapsible = (props) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className={`collapse about__collapse`}>
      <button className={open ? 'open' : ''} onClick={toggle}>
        {props.label}
        <img
          src={arrowSvg}
          alt={open ? 'Flèche vers le bas' : 'Flèche vers le haut'}
        />
      </button>
      {open && (
        <div className={`toggle ${open ? 'open' : ''}`}>{props.children}</div>
      )}
    </div>
  )
}
export default Collapsible
