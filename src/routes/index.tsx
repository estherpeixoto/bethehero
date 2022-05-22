import { useAuth } from '@hooks/useAuth'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export function Routes() {
  const { authenticated, organization } = useAuth()

  console.log({
    authenticated,
    organization
  })

  return authenticated ? <PrivateRoutes /> : <PublicRoutes />
}
