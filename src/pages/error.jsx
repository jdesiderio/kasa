import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <p className="error-type">404</p>
      <p className="error-txt">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error
