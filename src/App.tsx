import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { PublicRoutes } from './routes'
import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PublicRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
