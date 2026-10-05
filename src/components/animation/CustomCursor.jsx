import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useFinePointer } from '../../hooks/useFinePointer'

const INTERACTIVE = 'a, button, input, select, textarea, [data-cursor]'

export default function CustomCursor() {
  const hasMouse = useFinePointer()
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 380, damping: 30, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 380, damping: 30, mass: 0.4 })

  useEffect(() => {
    if (!hasMouse) return

    document.documentElement.classList.add('has-custom-cursor')

    const onMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)
      setHovering(Boolean(event.target.closest?.(INTERACTIVE)))
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove)
    document.documentElement.addEventListener('pointerleave', onLeave)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [hasMouse, x, y])

  if (!hasMouse) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[70]"
      >
        <motion.div
          animate={{ scale: hovering ? 1.9 : 1, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="-ml-5 -mt-5 size-10 rounded-full border-2 border-sun mix-blend-difference"
          style={{ backgroundColor: hovering ? 'rgba(255,194,14,0.25)' : 'transparent' }}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[70]"
      >
        <div className="-ml-[3px] -mt-[3px] size-1.5 rounded-full bg-sun" />
      </motion.div>
    </>
  )
}
