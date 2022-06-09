import { createContext, useContext, useEffect, useState } from 'react'
import {
  getAuth,
  signInWithPopup,
  User,
  signOut as signOutFirebase,
  onAuthStateChanged,
} from 'firebase/auth'
import { organizationService } from '@services/organization.services'
import { googleProvider } from '@lib/firebase'
import { Organization } from '@lib/entities'
import { setStorage } from '@utils/storage'

interface AuthProviderInterface {
  initializing: Boolean
  authenticated: Boolean
  organization: Organization | null
  signIn: (email: string) => Promise<boolean>
  signOut: () => boolean
  signInWithGoogle: () => Promise<boolean>
}

const AuthContext = createContext<AuthProviderInterface | null>(null)

export const AuthProvider = ({ children }) => {
  const [initializing, setInitializing] = useState<boolean>(true)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [organization, setOrganization] = useState<Organization | null>(null)

  const auth = getAuth()

  const changeAuthenticationState = async (neww?: Organization) => {
    console.log(neww)

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const loggedOrganization = await organizationService.findByUID(user.uid)
        setAuthenticated(true)
        setOrganization(loggedOrganization)
        setStorage('authenticated', 'true')
        setStorage('organization', JSON.stringify(loggedOrganization))

        console.log({ onAuthStateChanged: loggedOrganization })
      }

      if (initializing) setInitializing(false)
    })

    console.log({ changeAuthenticationState: organization })

    return () => unsubscribe()
  }

  useEffect(() => {
    console.info('useEffect start')
    changeAuthenticationState()
    console.info('useEffect end')
  }, [])

  const signIn = async (email: string) => {
    const result = await organizationService.find(email)
    return result ? true : false
  }

  const signOut = () => {
    signOutFirebase(auth)
    setAuthenticated(false)
    setOrganization(null)
    setStorage('authenticated', 'false')
    setStorage('organization', 'null')
    return true
  }

  const signInWithGoogle = async () => {
    try {
      // Open Google popup and get selected Google account
      const { user } = await signInWithPopup(auth, googleProvider)

      const organization = await organizationService.save({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
        city: null,
        state: null,
        avatar: user.photoURL,
      })

      changeAuthenticationState(organization)

      return true
    } catch (error) {
      console.log({ error })
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        initializing,
        authenticated,
        organization,
        signIn,
        signOut,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
