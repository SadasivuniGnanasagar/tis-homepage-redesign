import { useEffect, useState } from 'react'

// True only on devices with a mouse-like pointer. Touch screens report "coarse".
export function useFinePointer() {
  const query = '(pointer: fine)'
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (event) => setMatches(event.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return matches
}
