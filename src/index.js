export default function cx(...args) {
  return args
    .reduce((arr, val) => {
      if (typeof val === 'string' && val) {
        return arr.concat(val)
      }
      return arr
    }, [])
    .join(' ')
}
