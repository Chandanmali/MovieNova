import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Router>
    <App />
    </Router>

  </ThemeProvider>
 
    
  
)
