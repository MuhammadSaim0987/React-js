import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Youtube from './Youtube.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Youtube />
  </>
)
