export type Organization = {
  cidade: string
  email: string
  id?: string
  nome: string
  uf: string
  whatsapp: string
}

export type Case = {
  id?: string
  ong: Organization
  descricao: string
  valor: number
}
