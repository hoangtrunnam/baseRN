import {useEffect, useState} from 'react'

const useDebounce = (value: string | number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string | number>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay, value])

  return debouncedValue
}

export default useDebounce
