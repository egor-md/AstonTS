import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.js'
import { ThemeProvider } from './shared/lib/theme/ThemeContext.js'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <ThemeProvider theme='light'>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
