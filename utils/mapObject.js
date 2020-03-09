// byKeys will return keys instead of values to the passed function
export default function (obj, fn, byKeys = false) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = byKeys ? fn(key) : fn(obj[key])
    return result
  }, {})
}
