import { useAuth } from '@hooks/useAuth'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export function Routes() {
  const { user } = useAuth()

  return user ? <PrivateRoutes /> : <PublicRoutes />
}
