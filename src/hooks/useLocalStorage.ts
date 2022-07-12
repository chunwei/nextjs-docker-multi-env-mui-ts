import { useState, useEffect } from 'react'

// ----------------------------------------------------------------------

export default function useLocalStorage(key: string, defaultValue: { [key: string]: any }) {
  const [value, setValue] = useState(() => {
    console.log('useState localStorage', typeof localStorage)
    const storedValue = typeof localStorage === 'undefined' ? null : localStorage.getItem(key) 
    return storedValue === null ? defaultValue : JSON.parse(storedValue)
  })

  useEffect(() => {
    console.log('useEffect localStorage', localStorage)
    const listener = (e: StorageEvent) => {
      console.log('storage event', e)
      console.log('localStorage', localStorage)
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue || '{}'))
      }
    }
    window.addEventListener('storage', listener)

    return () => {
      window.removeEventListener('storage', listener)
    }
  }, [key, defaultValue])

  const setValueInLocalStorage = (newValue: any) => {
    console.log('setValueInLocalStorage', newValue)
    setValue((currentValue: any) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue
      if (localStorage) localStorage.setItem(key, JSON.stringify(result))
      return result
    })
  }

  return [value, setValueInLocalStorage]
}
