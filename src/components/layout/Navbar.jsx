import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { navItems, school } from '../../data/content'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-1 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-line bg-surface/85 py-2 pl-5 pr-2 shadow-lg shadow-ink/5 backdrop-blur-md">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight" onClick={close}>
          TIS<span className="text-sun">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={school.helplineHref}
            className="hidden items-center gap-2 px-2 text-sm font-semibold md:flex"
            aria-label={`Admissions helpline ${school.helpline}`}
          >
            <Phone size={16} /> {school.helpline}
          </a>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <a
            href={school.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center rounded-full bg-sun px-5 text-sm font-bold text-on-sun sm:inline-flex"
          >
            Apply now
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-surface p-4 shadow-xl lg:hidden"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={close} className="block rounded-xl px-4 py-3 text-lg font-medium hover:bg-bg">
                {item.label}
              </a>
            ))}
            <a href={school.applyUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-sun font-bold text-on-sun">
              Apply now
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
