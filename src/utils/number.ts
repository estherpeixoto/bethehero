const stringToFloat = (number: string) => {
  return parseFloat(number.replaceAll('.', '').replaceAll(',', '.'))
}

export { stringToFloat }
