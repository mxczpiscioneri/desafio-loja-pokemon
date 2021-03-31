export const money = (value) => {
  const formated = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  formated.replace(/\s/, ' ')
  return formated
}
