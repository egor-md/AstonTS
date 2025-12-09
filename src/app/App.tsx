import './App.css'
import { MainLayout } from '../shared/layouts/MainLayout'
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { LoadingProvider } from '../shared/contexts/LoadingContext';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <LoadingProvider>
        <ThemeProvider>
          <MainLayout />
        </ThemeProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
