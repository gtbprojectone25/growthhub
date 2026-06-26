import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreatorGuidePage from './components/CreatorGuidePage.jsx'

// Lightweight routing. The host serves index.html for any path (SPA
// fallback), so we pick the page from the current pathname.
const path = window.location.pathname.replace(/\/+$/, '')
const Page = path === '/creator-guide' ? CreatorGuidePage : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
