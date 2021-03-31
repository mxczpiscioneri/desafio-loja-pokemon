export const money = (value) => {
  let formated = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
  formated = formated.replace(/\s/, ' ')
  return formated
}
