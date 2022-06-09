import { UserCredential } from 'firebase/auth'

export type Organization = {
  uid?: string
  name: string
  email: string
  phone: string
  city: string
  state: string
  avatar: string
}

export type Case = {
  id?: string
  organization: Organization
  title: string
  description: string
  value: number
}
