import hexRgb from 'hex-rgb'
import rgbHex from 'rgb-hex'
import mapObject from '../../utils/mapObject'

export function generateOpacity(colors) {
  const opaqueColors = {}

  console.log('colors:', colors)
  mapObject(colors, color => {
    opaqueColors[color] = colors[color]
    for (let i = 1; i < 4; i++) {
      let rgba = hexRgb(colors[color], {format: 'array'})
      let fraction = 25 * i
      rgba[rgba.length - 1] = fraction / 100
      opaqueColors[`${color}-${fraction}`] = `#${rgbHex(...rgba)}`
    }
  }, true)
  return opaqueColors
}
