import React from 'react'
import ReactDOM from 'react-dom/client'
import './stylesheets/main.scss'
import AppRouter from './router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
