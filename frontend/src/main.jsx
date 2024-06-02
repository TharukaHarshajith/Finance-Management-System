import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from    'react-router-dom'
import GridBg from './components/ui/GridBg.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GridBg>
    <App />
    </GridBg>
    </BrowserRouter>
  </React.StrictMode>
);
