import { useState, useRef, useEffect } from 'react'
import arrowSvg from '../assets/img/arrow.svg'

const Collapsible = (props) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState()

  const toggle = () => {
    setOpen(!open)
  }

  const refHeight = useRef()

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`)
  }, [])

  return (
    <div className={`collapse about__collapse`}>
      <div onClick={toggle} className="collapse__btn">
        <h4>{props.label}</h4>
        <img
          className={open ? 'toggle-arrow rotated' : 'toggle-arrow'}
          src={arrowSvg}
          alt="flèche"
        />
      </div>
      <div
        ref={refHeight}
        className={open ? 'collapse__toggle animated' : 'collapse__toggle'}
        style={{ height: open ? `${height}` : '0px' }}
      >
        <div aria-hidden={open ? 'true' : 'false'}>{props.children}</div>
      </div>
    </div>
  )
}

export default Collapsible
