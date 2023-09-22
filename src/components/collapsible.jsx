import { useState, useRef, useEffect } from 'react'
import arrowSvg from '../assets/img/arrow.svg'

const Collapsible = (props) => {
  const [open, setOpen] = useState(false) // État qui contrôle l'ouverture et la fermeture du collapsible
  const [height, setHeight] = useState() // État pour stocker la hauteur du collapsible

  const toggle = () => {
    setOpen(!open) // Fonction de basculement pour ouvrir/fermer le collapsible
  }

  const refHeight = useRef() // Référence pour mesurer la hauteur du collapsible

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`) // Met à jour la hauteur lorsque le contenu change
  }, []) // Utilisation de useEffect pour mesurer la hauteur une fois au montage

  return (
    <div className={`collapse about__collapse`}>
      <div onClick={toggle} className="collapse__btn">
        <h4>{props.label}</h4>
        <img
          className={open ? 'toggle-arrow rotation' : 'toggle-arrow'}
          src={arrowSvg}
          alt="flèche"
        />
      </div>
      <div
        ref={refHeight}
        className={open ? 'collapse__toggle animation' : 'collapse__toggle'}
        style={{ height: open ? `${height}` : '0px' }} // Modifie la hauteur en fonction de l'état ouvert/fermé
      >
        <div>{props.children}</div>
      </div>
    </div>
  )
}

export default Collapsible
