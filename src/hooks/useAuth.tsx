import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  User,
} from 'firebase/auth'
import { auth } from '@lib/firebase'
import { Organization } from '@lib/entities'
import { organizationService } from '@services/organization.services'

interface AuthContextProps {
  user: User
  organization: Organization
  signIn: (email: string, password: string) => Promise<User>
  signUp: (organization: Organization) => Promise<User>
  signOut: () => Promise<void>
}

const authContext = createContext<AuthContextProps | null>(null)

function useAuthProvider() {
  const [user, setUser] = useState<User | null>(null)
  const [organization, setOrganization] = useState<Organization | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser)

        organizationService.find(authUser.uid).then((data) => {
          setOrganization(data)
        })
      } else {
        setUser(null)
        setOrganization(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const handleErrors = {
    /**
     * Displays user not found message
     */
    'auth/user-not-found': (): void => {
      alert('Usuário não encontrado')
      return
    },

    /**
     * Displays incorrect password message
     */
    'auth/wrong-password': (): void => {
      alert('Senha incorreta')
      return
    },
  }

  const signIn = async (email: string, password: string): Promise<User> => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)

      return response.user
    } catch (e) {
      handleErrors[e.code]
    }
  }

  const signUp = async (organization: Organization): Promise<User> => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        organization.email,
        organization.password
      )

      if (response) {
        const newOrganization = {
          id: response.user.uid,
          name: organization.name,
          email: organization.email,
          phone: organization.phone,
          city: organization.city,
          state: organization.state,
        }

        if (await organizationService.add(newOrganization)) {
          setOrganization(newOrganization)
          setUser(response.user)
          return response.user
        }
      }

      throw 'no response'
    } catch (e) {
      console.error(e)
    }
  }

  const signOut = async (): Promise<void> => {
    try {
      await signOutFirebase(auth)
      setUser(null)
      setOrganization(null)
      return
    } catch (e) {
      console.error(e)
    }
  }

  return {
    user,
    organization,
    signIn,
    signUp,
    signOut,
  }
}

export function AuthProvider({ children }) {
  const auth = useAuthProvider()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}
