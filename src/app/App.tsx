import './App.css'
import { MainLayout } from '../shared/layouts/MainLayout'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (   
      <BrowserRouter>        
          <MainLayout />        
      </BrowserRouter>
  )
}

export default App
