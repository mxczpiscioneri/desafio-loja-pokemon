/* eslint complexity: ["error", 10] */

const lightenDarkenColor = (color = '', amt) => {
  let col = color

  col = col.slice(1)

  const num = parseInt(col, 16)

  const r = (num >> 16) + amt
  const g = (num & 0x0000FF) + amt
  const b = ((num >> 8) & 0x00FF) + amt

  return `#${(g | (b << 8) | (r << 16)).toString(16)}`
}

export default lightenDarkenColor
