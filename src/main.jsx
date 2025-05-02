import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./Context/AuthContext";
import { UtilityProvider } from "./Context/UtilityContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UtilityProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </UtilityProvider>
  </StrictMode>,
)
