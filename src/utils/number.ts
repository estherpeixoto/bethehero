const stringToFloat = (number: string) => {
  return parseFloat(
    number.replaceAll('R$', '').replaceAll('.', '').replaceAll(',', '.').trim()
  )
}

const floatToString = (number: number) => {
  return number.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}

export { stringToFloat, floatToString }
