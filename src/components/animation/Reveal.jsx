import { motion } from 'framer-motion'

// Wraps content in a whileInView entrance. `index` staggers siblings.
export default function Reveal({ children, index = 0, as = 'div', className = '' }) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: Math.min(index, 6) * 0.07 }}
    >
      {children}
    </Component>
  )
}
