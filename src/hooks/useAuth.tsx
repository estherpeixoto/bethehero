import { createContext, useContext, useState } from 'react'
import { Organization } from '@lib/entities'
import { organizationService } from '@services/organization.services'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [organization, setOrganization] = useState<Organization>()

  const signIn = async ({ email }) => {
    const result = await fakeAsyncSignIn(email)

    console.log(result)

    if (result) {
      setAuthenticated(true)
    }
  }

  const signOut = async () => {
    const result = await fakeAsyncSignOut()

    if (result) {
      setAuthenticated(false)
    }
  }

  const fakeAsyncSignIn = async (email): Promise<Organization> => {
    return await organizationService.find(email)
  }

  const fakeAsyncSignOut = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('signOut')
      }, 300)
    })
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
