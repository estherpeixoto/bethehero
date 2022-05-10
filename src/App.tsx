import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './routes'
import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  )
}
