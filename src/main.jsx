import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import AppLoader from './components/shared/AppLoader'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLoader>
      <App />
    </AppLoader>
  </StrictMode>,
)
