import { useAuth } from '@hooks/useAuth'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export function Routes() {
  const { organization } = useAuth()

  return organization ? <PrivateRoutes /> : <PublicRoutes />
}
