import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataProvider } from './DataContext.jsx'
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
    <DataProvider>
      <App />
    </DataProvider>
)
