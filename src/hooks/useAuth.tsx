import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'
import { auth } from '@lib/firebase'

interface AuthContextProps {
  user: User
  signIn: (email: string, password: string) => Promise<User>
  signup: (email: string, password: string) => Promise<User>
  signout: () => Promise<void>
}

const authContext = createContext<AuthContextProps | null>(null)

function useAuthProvider() {
  const [user, setUser] = useState(null)

  const handleErrors = {
    /**
     * Register the new user and then sign-in
     */
    'auth/user-not-found': async (
      email: string,
      password: string
    ): Promise<boolean> => {
      Promise.all([
        await createUserWithEmailAndPassword(auth, email, password),
        await signInWithEmailAndPassword(auth, email, password),
      ]).then((response) => {
        setUser(response[1].user)
        return true
      })

      return false
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

      if (response) {
        setUser(response.user)
        return response.user
      }

      throw 'no response'
    } catch (e) {
      handleErrors[e.code](email, password)
    }
  }

  const signup = async (email: string, password: string): Promise<User> => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (response) {
        setUser(response.user)
        return response.user
      }

      throw 'no response'
    } catch (e) {
      console.error(e)
    }
  }

  const signout = async (): Promise<void> => {
    try {
      await signOut(auth)
      setUser(false)
      return
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    user,
    signIn,
    signup,
    signout,
  }
}

export function AuthProvider({ children }) {
  const auth = useAuthProvider()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}
