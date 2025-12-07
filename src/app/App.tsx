import './App.css'
import { MainLayout } from '../shared/layouts/MainLayout'
import type { Post } from '../entities/post/Post';
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';


function App() {

  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
