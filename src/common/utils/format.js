export const money = value => new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
