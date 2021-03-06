export type Organization = {
  id?: string
  name: string
  email: string
  password?: string
  phone: string
  city: string
  state: string
}

export type Case = {
  id?: string
  organization: Organization
  title: string
  description: string
  value: number
}

export type UpdatedCase = {
  id: string
  title: string
  description: string
  value: number
}
