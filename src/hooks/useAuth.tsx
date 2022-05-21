import { createContext, useContext, useState } from 'react'
import { Organization } from '@lib/entities'
import { organizationService } from '@services/organization.services'
import { setStorage, getStorage } from '@utils/storage'

interface AuthProviderInterface {
  authenticated: Boolean
  organization: Organization|null
  signIn: (email: string) => Promise<boolean>
  signOut: () => boolean
}

const AuthContext = createContext<AuthProviderInterface | null>(null)

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(
    JSON.parse(getStorage('authenticated'))
  )

  const [organization, setOrganization] = useState<Organization | null>(
    JSON.parse(getStorage('organization'))
  )

  const signIn = async (email: string) => {
    const result = await organizationService.find(email)

    if (result) {
      setAuthenticated(true)
      setOrganization(result)

      setStorage('authenticated', 'true')
      setStorage('organization', JSON.stringify(result))

      return true
    }

    return false
  }

  const signOut = () => {
    setStorage('authenticated', 'false')
    setStorage('organization', 'null')
    setAuthenticated(false)
    setOrganization(null)

    return true
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        organization,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
