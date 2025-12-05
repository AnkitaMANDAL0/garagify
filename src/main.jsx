import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'//authentication
import './index.css'
import App from './App.jsx'//containing all routes
import { BrowserRouter } from 'react-router-dom'
import { GaragesProvider } from '../contexts/GaragesContext.jsx'


//import { GaragesContext } from '../contexts/GaragesContext.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if(!PUBLISHABLE_KEY){
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <GaragesProvider>
    <BrowserRouter>
        <App />
      </BrowserRouter>
    </GaragesProvider>
      
    
  </ClerkProvider>
);
