import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //any changes will be done here and line 8 //here we import
//dom- creates a tree like structure, here we are crating a root and that root is app.jsx, to render it we need main .jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
  </StrictMode>,
)
