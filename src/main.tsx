import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.js'
import { ThemeProvider } from './shared/lib/theme/ThemeContext.js'
import { Provider } from 'react-redux'
import { store } from './app/providers/store/store.js'

createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>

  </StrictMode >
)
