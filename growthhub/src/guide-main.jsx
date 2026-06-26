import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreatorGuidePage from './components/CreatorGuidePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreatorGuidePage />
  </StrictMode>,
)
