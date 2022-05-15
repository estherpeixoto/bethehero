export type Organization = {
  id?: string
  name: string
  email: string
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
