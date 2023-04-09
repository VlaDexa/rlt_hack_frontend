import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {OpenAPI} from "./openapi";

OpenAPI.BASE="https://4cd8-212-45-15-105.ngrok-free.app";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
