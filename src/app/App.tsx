import './App.css'
import { MainLayout } from '../shared/layouts/MainLayout'
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
