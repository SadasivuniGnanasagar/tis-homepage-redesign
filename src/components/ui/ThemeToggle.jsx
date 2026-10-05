import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      className="relative flex h-10 w-[4.5rem] shrink-0 items-center rounded-full border border-line bg-surface p-1"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className={`grid size-8 place-items-center rounded-full bg-sun text-on-sun ${isDark ? 'ml-auto' : ''}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid place-items-center"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  )
}
