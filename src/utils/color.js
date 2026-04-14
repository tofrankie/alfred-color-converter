import { HEX_COLOR_REGEX, RGB_COLOR_REGEX, RGBA_COLOR_REGEX } from '../constants/regex'
import { isRgbLongString, isRgbShortString } from './rgb'
import { isRgbaLongString, isRgbaShortString } from './rgba'

export function getHexColorString(string) {
  HEX_COLOR_REGEX.lastIndex = 0
  const matches = HEX_COLOR_REGEX.exec(string)
  return matches ? matches[0] : ''
}

export function getRgbColorString(string) {
  RGB_COLOR_REGEX.lastIndex = 0
  const matches = RGB_COLOR_REGEX.exec(string)
  if (matches) return matches[0]

  if (isRgbLongString(string) || isRgbShortString(string)) return string
  return ''
}

export function getRgbaColorString(string) {
  RGBA_COLOR_REGEX.lastIndex = 0
  const matches = RGBA_COLOR_REGEX.exec(string)
  if (matches) return matches[0]

  if (isRgbaLongString(string) || isRgbaShortString(string)) return string
  return ''
}
