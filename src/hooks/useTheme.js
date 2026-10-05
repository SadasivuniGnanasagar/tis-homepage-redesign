import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'tis-theme'

// The inline script in index.html sets the initial class, so we read it back here.
export function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
  }, [isDark])

  const toggle = useCallback(() => setIsDark((prev) => !prev), [])

  return { isDark, toggle }
}
