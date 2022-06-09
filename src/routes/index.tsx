import { useAuth } from '@hooks/useAuth'
import { LoadingScreen } from '@pages/LoadingScreen'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export function Routes() {
  const { initializing, authenticated, organization } = useAuth()

  console.info({ routes: authenticated })

  // Display loading screen
  if (initializing === true) {
    return <LoadingScreen />
  }

  return authenticated === true ? <PrivateRoutes /> : <PublicRoutes />
}
