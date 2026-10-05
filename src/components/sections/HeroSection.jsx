import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { hero, school } from '../../data/content'
import Button from '../ui/Button'

const words = hero.title.split(' ')

const wordVariants = {
  hidden: { y: '110%' },
  show: (i) => ({ y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.08 } }),
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  const sunY = useTransform(scrollY, [0, 700], [0, 160])
  const farY = useTransform(scrollY, [0, 700], [0, -40])
  const nearY = useTransform(scrollY, [0, 700], [0, -90])

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8">
      <div aria-hidden="true" className="absolute inset-0">
        <motion.div
          style={{ y: sunY }}
          className="absolute -right-24 top-28 size-72 rounded-full bg-sun opacity-30 lg:opacity-100 lg:dark:opacity-40 sm:right-[1%] sm:size-[22rem]"
        />
        <motion.svg style={{ y: farY }} viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[44%] w-full fill-ink/10">
          <path d="M0 320V190l140-70 120 60 180-130 170 120 150-90 210 140 160-80 150 70 160-90v270z" />
        </motion.svg>
        <motion.svg style={{ y: nearY }} viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-6 h-[32%] w-full fill-pine/30">
          <path d="M0 320V220l200-90 160 80 230-110 200 120 180-70 270 100v70z" />
        </motion.svg>
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <h1 aria-label={hero.title} className="max-w-5xl font-display text-[clamp(2.5rem,6.6vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} aria-hidden="true" className="mr-[0.25em] inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span custom={i} variants={wordVariants} initial="hidden" animate="show" className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 max-w-xl"
        >
          <p className="text-xl font-semibold">{hero.lead}</p>
          <p className="mt-3 text-lg leading-relaxed text-muted">{hero.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={school.applyUrl} target="_blank" rel="noopener noreferrer">Apply now</Button>
            <Button href={school.tourUrl} variant="outline" target="_blank" rel="noopener noreferrer">
              Take the virtual tour
            </Button>
          </div>
        </motion.div>

        <a href="#numbers" aria-label="Scroll to campus life" className="absolute -bottom-16 left-0 hidden items-center gap-2 text-sm font-medium text-muted sm:flex">
          <ArrowDown size={16} /> Scroll
        </a>
      </div>
    </section>
  )
}
