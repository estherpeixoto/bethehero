import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './routes'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  )
}

export default App
