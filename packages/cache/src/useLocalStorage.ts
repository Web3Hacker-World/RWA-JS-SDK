import { noopStorage } from './noopStorage'

export function useLocalStorage() {
  const cache =
    typeof window !== 'undefined' ? window.localStorage : noopStorage

  const setItem = (key: string | any, val = '') => {
    if (typeof window === 'undefined') return false

    if (typeof key === 'object') {
      for (const _key in key) setItem(_key, key[_key])

      return true
    }

    val = JSON.stringify(val)
    cache.setItem(key, val)
  }

  const getItem = (key: string, defaultVal = '') => {
    if (typeof window === 'undefined') return defaultVal

    let val = cache.getItem(key)
    if (val === 'undefined' || val === null) return defaultVal

    val = JSON.parse(val)

    return val
  }

  return {
    getItem,
    setItem,
  }
}
