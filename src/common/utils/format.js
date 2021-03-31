export const money = (value) => {
  let formated = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  formated = formated.replace(/\s/, ' ')
  return formated
}
